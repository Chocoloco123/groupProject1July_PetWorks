var express = require('express');
var router = express.Router();
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

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


module.exports = router;
