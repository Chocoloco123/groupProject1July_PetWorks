const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

// let questionId;

router.get('/new', csrfProtection, requireAuth, (req, res) => {
    res.render('add-question', { csrfToken: req.csrfToken() })
})

router.post('/new', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const { question, category, petType } = req.body
    const { userId } = req.session.auth;
    const newQuestion = await db.Question.create({
        userId,
        question,
        category,
        petType
    });

    res.redirect('/');
}))

router.get('/:id', csrfProtection, asyncHandler(async (req, res) => {
    let questionId = req.params.id;
    let userId;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }

    const question = await db.Question.findByPk(questionId, {
        include: [db.User, { model: db.Answer, include: db.Comment }]
    });

    const answers = await db.Answer.findAll({
        where: {
            questionId
        },
        include: [db.User, db.Question, db.Comment],
        order: [['createdAt', 'DESC']]
    });

    const comments = await db.Comment.findAll({
        include: [db.User, { model: db.Answer, include: db.Question }],
        order: [['createdAt', 'DESC']]
    })

    const users = await db.User.findAll();
    // console.log(users.length)
    const likeCount = await db.Like.findAll({
        where: {
            questionId
        }
    });

    res.render('question', {
        question,
        csrfToken: req.csrfToken(),
        answers,
        users,
        userId,
        comments,
        likeCount
    })

}));

router.get('/:id/edit', csrfProtection, asyncHandler(async (req, res) => {
    let questionId = req.params.id;
    const question = await db.Question.findByPk(questionId)

    res.render('edit-question', {
        question,
        csrfToken: req.csrfToken()
    })

}));

router.post('/:id/edit', csrfProtection, asyncHandler(async (req, res) => {
    const { question, category, petType } = req.body
    let questionId = req.params.id;
    const editQuestion = await db.Question.findByPk(questionId)

    editQuestion.update({
        question,
        category,
        petType
    });

    await editQuestion.save();

    res.redirect('/');
}));

router.post('/:id/delete', asyncHandler(async (req, res) => {
    const { id, category } = req.body

    let questions;
    const deleteQuestion = await db.Question.findByPk(id)
    currentUserId = req.session.auth.userId;

    await deleteQuestion.destroy()

    if (category === 'Home') {
        questions = await db.Question.findAll({
            order: [['createdAt', 'DESC']]
        })
    }
    else {
        questions = await db.Question.findAll({
            where: { category: category.toLowerCase() },
            order: [['createdAt', 'DESC']]
        })
    }

    res.json({
        questions,
        currentUserId
    })

}));

router.get('/:id/pageDelete', asyncHandler(async (req, res) => {
    const questionId = req.params.id;

    const deleteQuestion = await db.Question.findByPk(questionId)
    await deleteQuestion.destroy()

    res.redirect(`/`);
}));


// router.get('/')

// Like route
router.post('/:id/like', requireAuth, asyncHandler(async (req, res) => {

    const questionId = req.params.id;
    let userId;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }
    // const { userId } = req.session.auth;

    const like = await db.Like.findOne({
        where: {
            questionId,
            userId
        }
    })

    if (like) {
        await like.destroy();

        const questionLikeCount = await db.Like.findAll({
            where: {
                questionId
            }
        })
        return res.status(200).json({ likeCount: questionLikeCount.length })

    } else {
        const newLike = await db.Like.create({
            userId,
            questionId
        })

        const questionLikeCount = await db.Like.findAll({
            where: {
                questionId
            }
        })
        return res.status(200).json({ likeCount: questionLikeCount.length })
    }
}));



module.exports = router;
