const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

// const validators = [
//   check('comment')
//     .exists({checkFalsy: true})
//     .withMessage('Please enter comment.')
// ]

router.post('/', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
  const { comment, userId, answerId, questionId } = req.body;

  const newComment = await db.Comment.create({
    userId: parseInt(userId),
    answerId: parseInt(answerId),
    comment
  })

  res.redirect(`/questions/${questionId}`);
}))

router.get('/:id/edit', csrfProtection, asyncHandler(async (req, res) => {
  let commentId = req.params.id;
  const comment = await db.Comment.findByPk(commentId)

  res.render('edit-comment', {
    comment,
    csrfToken: req.csrfToken()
  })
}));

router.post('/:id/edit', csrfProtection, asyncHandler(async (req, res) => {
  const { comment } = req.body
  let commentId = req.params.id;
  const editComment = await db.Comment.findByPk(commentId, {
    include: [db.Answer]
  })

  editComment.update({
    comment
  });

  await editComment.save();

  res.redirect(`/questions/${editComment.Answer.questionId}`);
}));

router.get('/:id/delete', asyncHandler(async (req, res) => {
  const commentId = req.params.id;

  const deleteComment = await db.Comment.findByPk(commentId, {
    include: [db.Answer]
  })
  await deleteComment.destroy()

  res.redirect(`/questions/${deleteComment.Answer.questionId}`);
}));

module.exports = router;