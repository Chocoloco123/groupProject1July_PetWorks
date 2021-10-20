const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { requireAuth } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/', asyncHandler (async(req, res, next) => {

  const questions = await db.Question.findAll({
    order: [['createdAt', 'DESC']]
  });

  res.render('home', {
    title: 'Home',
    questions
  });

}));

module.exports = router;
