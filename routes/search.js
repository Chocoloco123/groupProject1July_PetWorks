const express = require('express');
const router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

router.post('/all', asyncHandler(async (req, res) => {
    const { petType } = req.body;
    // console.log('hello world!!!!!!!!!', petType); 
    let userId;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }

    const questions = await db.Question.findAll({
        order: [['createdAt', 'DESC']]
    });

    console.log(questions);

    res.json({
      questions: questions, // <-- the white questions is the key that's equal to data
      userId: userId,
    })

}));

router.post('/dog', asyncHandler(async (req, res) => {
    const { petType } = req.body;
    // console.log('hello world!!!!!!!!!', petType); 
    let userId;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }

    const questions = await db.Question.findAll({
        where: { petType: petType }, // can also do { petType } <-- if both same
        order: [['createdAt', 'DESC']]
    });

    console.log(questions);

    res.json({
      questions: questions, // <-- the white questions is the key that's equal to data
      userId: userId,
    })

}));

router.post('/cat', asyncHandler(async (req, res) => {
    const { petType } = req.body;
    // console.log('hello world!!!!!!!!!', petType); 
    let userId;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }

    const questions = await db.Question.findAll({
        where: { petType: petType }, // can also do { petType } <-- if both same
        order: [['createdAt', 'DESC']]
    });

    console.log(questions);

    res.json({
      questions: questions, // <-- the white questions is the key that's equal to data
      userId: userId,
    })

}));

router.post('/other', asyncHandler(async (req, res) => {
    const { petType } = req.body;
    // console.log('hello world!!!!!!!!!', petType); 
    let userId;

    if (req.session.auth) {
        userId = req.session.auth.userId
    }

    const questions = await db.Question.findAll({
        where: { petType: petType }, // can also do { petType } <-- if both same
        order: [['createdAt', 'DESC']]
    });

    console.log(questions);

    res.json({
      questions: questions, // <-- the white questions is the key that's equal to data
      userId: userId,
    })

}));

router.post('/myQuestions', asyncHandler(async (req, res) => {
    const { petType } = req.body;
    // console.log('hello world!!!!!!!!!', petType); 
    let currentUserId;

    if (req.session.auth) {
        currentUserId = req.session.auth.userId
    }

    const questions = await db.Question.findAll({
        where: { userId: currentUserId }, 
        order: [['createdAt', 'DESC']]
    });

    console.log(questions);

    res.json({
      questions: questions, // <-- the white questions is the key that's equal to data
      userId: currentUserId,
    })

}));

module.exports = router;