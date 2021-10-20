const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
// const { questionId } = require('./question')

const { csrfProtection, asyncHandler } = require('./utils');

router.post('/new', csrfProtection, requireAuth, (req, res) => {
    const { questionId } = req.body
    res.render('add-answer', {
        questionId,
        csrfToken: req.csrfToken()
    })
})

router.post('/', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const { questionId, answer } = req.body

    const { userId } = req.session.auth;

    const newAnswer = await db.Answer.create({
        userId,
        questionId,
        answer,
    });

    res.redirect(`/questions/${questionId}`);
}));

router.get('/:id/edit', csrfProtection, asyncHandler(async (req, res) => {
    let answerId = req.params.id;
    const answer = await db.Answer.findByPk(answerId)

    res.render('edit-answer', {
        answer,
        csrfToken: req.csrfToken()
    })
}));

router.post('/:id/edit', csrfProtection, asyncHandler(async (req, res) => {
    const { answer } = req.body
    let answerId = req.params.id;
    const editAnswer = await db.Answer.findByPk(answerId)

    editAnswer.update({
        answer
    });

    await editAnswer.save();

    res.redirect(`/questions/${editAnswer.questionId}`);
}));

router.get('/:id/delete', asyncHandler(async (req, res) => {
    const answerId = req.params.id;

    const deleteAnswer = await db.Answer.findByPk(answerId)
    await deleteAnswer.destroy()   

    res.redirect(`/questions/${deleteAnswer.questionId}`);
}));

module.exports = router;