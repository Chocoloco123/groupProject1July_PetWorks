const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

router.post('/', csrfProtection, requireAuth, asyncHandler(async(req, res)=> {
    const {questionId, likeNum} = req.body;
    const {userId} = req.session.auth;
    
    const newLike = await db.Like.create({
        userId: parseInt(userId), 
        questionId: parseInt(questionId), 
    })

    res.redirect('/');
}))

module.exports = router;
