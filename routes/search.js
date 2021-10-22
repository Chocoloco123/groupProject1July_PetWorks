const express = require('express');
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

router.post('/all', asyncHandler(async (req, res) => {
    const { category, petType } = req.body;
    // console.log('hello world!!!!!!!!!', petType); 
    let userId;
    let questions;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }

    if (category === 'Home') {
        questions = await db.Question.findAll({
            order: [['createdAt', 'DESC']]
        });
    } else {
        questions = await db.Question.findAll({
            where: { category: category.toLowerCase() }, // can also do { petType } <-- if both same
            order: [['createdAt', 'DESC']]
        });
    }

    res.json({
        questions: questions, // <-- the white questions is the key that's equal to data
        userId: userId,
    })

}));

router.post('/dog', asyncHandler(async (req, res) => {
    const { category, petType } = req.body;
    // console.log('hello world!!!!!!!!!', petType); 
    let userId;
    let questions;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }

    if (category === 'Home') {
        questions = await db.Question.findAll({
            where: { petType: petType }, // can also do { petType } <-- if both same
            order: [['createdAt', 'DESC']]
        });
    } else {
        questions = await db.Question.findAll({
            where: { petType: petType, category: category.toLowerCase() }, // can also do { petType } <-- if both same
            order: [['createdAt', 'DESC']]
        });
    }


    res.json({
        questions: questions, // <-- the white questions is the key that's equal to data
        userId: userId,
    })

}));

router.post('/cat', asyncHandler(async (req, res) => {
    const { category, petType } = req.body;
    // console.log('hello world!!!!!!!!!', petType); 
    let userId;
    let questions;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }

    if (category === 'Home') {
        questions = await db.Question.findAll({
            where: { petType: petType }, // can also do { petType } <-- if both same
            order: [['createdAt', 'DESC']]
        });
    } else {
        questions = await db.Question.findAll({
            where: { petType: petType, category: category.toLowerCase() }, // can also do { petType } <-- if both same
            order: [['createdAt', 'DESC']]
        });
    }

    res.json({
        questions: questions, // <-- the white questions is the key that's equal to data
        userId: userId,
    })

}));

router.post('/other', asyncHandler(async (req, res) => {
    const { category, petType } = req.body;
    // console.log('hello world!!!!!!!!!', petType); 
    let userId;
    let questions;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }

    if (category === 'Home') {
        questions = await db.Question.findAll({
            where: { petType: petType }, // can also do { petType } <-- if both same
            order: [['createdAt', 'DESC']]
        });
    } else {
        questions = await db.Question.findAll({
            where: { petType: petType, category: category.toLowerCase() }, // can also do { petType } <-- if both same
            order: [['createdAt', 'DESC']]
        });
    }

    res.json({
        questions: questions, // <-- the white questions is the key that's equal to data
        userId: userId,
    })

}));

router.post('/myQuestions', asyncHandler(async (req, res) => {
    const { category, petType } = req.body;
    // console.log('hello world!!!!!!!!!', petType); 
    let currentUserId;
    let questions;

    if (req.session.auth) {
        currentUserId = req.session.auth.userId
    }

    if (category === 'Home') {
        questions = await db.Question.findAll({
            where: { userId: currentUserId }, // can also do { petType } <-- if both same
            order: [['createdAt', 'DESC']]
        });
    } else {
        questions = await db.Question.findAll({
            where: { userId: currentUserId, category: category.toLowerCase() }, // can also do { petType } <-- if both same
            order: [['createdAt', 'DESC']]
        });
    }

    res.json({
        questions: questions, // <-- the white questions is the key that's equal to data
        userId: currentUserId,
    })

}));

module.exports = router;