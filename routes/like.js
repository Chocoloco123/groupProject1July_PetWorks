const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

// router.get('/test', asyncHandler(async(req, res) => {
//     res.render('hello world');
//     res.end();
// }))

router.post('/:id/like', csrfProtection, requireAuth, asyncHandler(async(req, res)=> {
    const {questionId} = req.params.id;
    const {userId} = req.session.auth;

    const question = await db.Question.findByPk(questionId)

    const newLike = await db.Like.create({
<<<<<<< HEAD
        userId: parseInt(userId),
        questionId: parseInt(questionId)
=======
        userId: parseInt(userId), 
        questionId: parseInt(questionId), 
>>>>>>> b1d84e27943e90191037291b297ae6313c41c560
    })

    res.end();
}))

module.exports = router;
