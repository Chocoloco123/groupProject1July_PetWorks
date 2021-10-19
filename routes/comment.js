const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

router.post('/', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
  const { comment, userId, answerId, questionId } = req.body;

  // const question = await db.Question.findByPk(questionId, {
  //   include: [db.User, { model: db.Answer, include: db.Comment }]
  // });

  // const answers = await db.Answer.findAll({
  //   where: {
  //     questionId
  //   },
  //   include: [db.User, db.Question, db.Comment],
  //   order: [['createdAt', 'DESC']]
  // });

  // Creation of new comment to be submitted to database
  const newComment = await db.Comment.create({
    userId: parseInt(userId),
    answerId: parseInt(answerId),
    comment
  })

  // Array of comments from database
  // const comments = await db.Comment.findAll({
  //   where: {
  //     answerId
  //   },
  //   order: [['createdAt', 'DESC']]
  // })

  res.redirect(`/questions/${questionId}`);
}))

module.exports = router;