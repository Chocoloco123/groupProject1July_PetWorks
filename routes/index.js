const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { requireAuth } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {

  const questions = await db.Question.findAll({
    order: [['createdAt', 'DESC']]
  });

  res.render('home', {
    title: 'Home',
    questions,
    userId = req.session.auth.userId,
    username = user.username
  })

  res.render('home', {
    title: 'Home',
    questions,
    username,
    userId
  });

}));
module.exports = router;
