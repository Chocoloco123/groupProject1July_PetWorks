const express = require('express');
const { requireAuth } = require('../auth');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'a/A Express Skeleton Home' });
});

module.exports = router;
