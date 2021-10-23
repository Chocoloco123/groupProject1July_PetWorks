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
    
    const newLike = await db.Like.create({
        userId: parseInt(userId), 
        questionId: parseInt(questionId), 
    })

    res.end();
}))

module.exports = router;
