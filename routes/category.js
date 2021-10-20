const express = require('express');
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

router.get('/activity', asyncHandler(async (req, res) => {
    const questions = await db.Question.findAll({
        where: { category: 'activity' },
        order: [['createdAt', 'DESC']]
    });

    res.render('category', {
        title: "Activity",
        questions
    })
}));

router.get('/nutrition', asyncHandler(async (req, res) => {
    const questions = await db.Question.findAll({
        where: { category: 'nutrition' },
        order: [['createdAt', 'DESC']]
    });

    res.render('category', {
        title: "Nutrition",
        questions
    })
}));

router.get('/socialization', asyncHandler(async (req, res) => {
    const questions = await db.Question.findAll({
        where: { category: 'socialization' },
        order: [['createdAt', 'DESC']]
    });

    res.render('category', {
        title: "Socialization",
        questions
    })
}));

router.get('/training', asyncHandler(async (req, res) => {
    const questions = await db.Question.findAll({
        where: { category: 'training' },
        order: [['createdAt', 'DESC']]
    });

    res.render('category', {
        title: "Training",
        questions
    })
}));

router.get('/veterinary', asyncHandler(async (req, res) => {
    const questions = await db.Question.findAll({
        where: { category: 'veterinary' },
        order: [['createdAt', 'DESC']]
    });

    res.render('category', {
        title: "Veterinary",
        questions
    })
}));

router.get('/miscellaneous', asyncHandler(async (req, res) => {
    const questions = await db.Question.findAll({
        where: { category: 'miscellaneous' },
        order: [['createdAt', 'DESC']]
    });

    res.render('category', {
        title: "Misc.",
        questions
    })
}));

module.exports = router;
