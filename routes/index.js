const express = require('express');
const db = require('../db/models');
const { requireAuth } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');
const router = express.Router();

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {

  const questions = await db.Question.findAll({
    order: [['createdAt', 'DESC']]
  });

  let userId;
  let username;

  if (req.session.auth) {
    userId = req.session.auth.userId
    let user = await db.User.findByPk(userId);
    username = user.username;
  }

  res.render('home', {
    title: 'Home',
    questions,
    username,
    userId
  });

}));

module.exports = router;
