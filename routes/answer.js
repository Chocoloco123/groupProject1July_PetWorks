const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

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
}))
