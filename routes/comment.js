const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

router.post('/', csrfProtection, requireAuth, asyncHandler(async(req, res) => {
  const { comment, userId, answerId } = req.body;
  
  const newComment = await db.Comment.create({
    userId,
    answerId,
    comment
  }) 

  // res.render(`question`, {
  //       questionId,
  //       question,
  //       csrfToken: req.csrfToken(),
  //       answers
  // });
  
}))

module.exports = router;