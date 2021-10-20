const express = require('express');
const router = express.Router();
const { requireAuth } = require('../auth');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

router.post('/', csrfProtection, asyncHandler(async(req, res) => {
  // const { comment } = req.body;
  // console.log(comment);
}))

module.exports = router;
