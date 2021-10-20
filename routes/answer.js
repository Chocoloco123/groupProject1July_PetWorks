const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

router.post('/new', csrfProtection, requireAuth, (req, res) => {
    const questionId = req.body.questionId

    res.render('add-answer', {
        questionId,
        csrfToken: req.csrfToken()
    })
})

router.post('/', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const { answer, questionId } = req.body
    const { userId } = req.session.auth;
    const question = await db.Question.findByPk(questionId, {
        include: [db.User, { model: db.Answer, include: db.Comment }]
    });
    const newAnswer = await db.Answer.create({
        userId,
        questionId,
        answer,
    });

    const answers = await db.Answer.findAll({
        where: {
            questionId
        },
        include: [db.User, db.Question, db.Comment],
        order: [['createdAt', 'DESC']]
    });

    res.render(`question`, {
        questionId,
        question,
        csrfToken: req.csrfToken(),
        answers
    });
}))

module.exports = router;
