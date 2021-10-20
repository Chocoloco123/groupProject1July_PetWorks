const express = require('express');
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

router.get('/activity', asyncHandler(async (req, res) => {
    let userId;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }

    const questions = await db.Question.findAll({
        where: { category: 'activity' },
        order: [['createdAt', 'DESC']]
    });

    res.render('category', {
        title: "Activity",
        questions,
        userId
    })
}));

router.get('/nutrition', asyncHandler(async (req, res) => {
    let userId;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }

    const questions = await db.Question.findAll({
        where: { category: 'nutrition' },
        order: [['createdAt', 'DESC']]
    });

    res.render('category', {
        title: "Nutrition",
        questions,
        userId
    })
}));

router.get('/socialization', asyncHandler(async (req, res) => {
    let userId;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }

    const questions = await db.Question.findAll({
        where: { category: 'socialization' },
        order: [['createdAt', 'DESC']]
    });

    res.render('category', {
        title: "Socialization",
        questions,
        userId
    })
}));

router.get('/training', asyncHandler(async (req, res) => {
    let userId;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }

    const questions = await db.Question.findAll({
        where: { category: 'training' },
        order: [['createdAt', 'DESC']]
    });

    res.render('category', {
        title: "Training",
        questions,
        userId
    })
}));

router.get('/veterinary', asyncHandler(async (req, res) => {
    let userId;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }

    const questions = await db.Question.findAll({
        where: { category: 'veterinary' },
        order: [['createdAt', 'DESC']]
    });

    res.render('category', {
        title: "Veterinary",
        questions,
        userId
    })
}));

router.get('/miscellaneous', asyncHandler(async (req, res) => {
    let userId;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }

    const questions = await db.Question.findAll({
        where: { category: 'miscellaneous' },
        order: [['createdAt', 'DESC']]
    });

    res.render('category', {
        title: "Miscellaneous",
        questions,
        userId
    })
}));

module.exports = router;
