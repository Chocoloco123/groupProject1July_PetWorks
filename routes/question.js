var express = require('express');
var router = express.Router();
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

let questionId;

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
    questionId = req.params.id;

    const question = await db.Question.findByPk(questionId, {
        include: [db.User, { model: db.Answer, include: db.Comment }]
    });

    const answers = await db.Answer.findAll({
        where: {
            questionId
        },
        include: [db.User, db.Question, db.Comment]
    });

    res.render('question', {
        questionId,
        question,
        csrfToken: req.csrfToken(),
        answers
    })

}));

module.exports = router;

