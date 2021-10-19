const express = require('express');
const db = require('../db/models');
const { requireAuth } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');
const router = express.Router();

/* GET home page. */
router.get('/', asyncHandler (async(req, res, next) => {

  const questions = await db.Question.findAll();

  res.render('home', { 
    title: 'Home',
    questions 
  });

}));

module.exports = router;
