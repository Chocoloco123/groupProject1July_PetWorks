var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

router.get('/', csrfProtection, (req, res) => {
    res.render('question-form', {csrfToken: req.csrfToken()})
})

router.post('/', csrfProtection, asyncHandler(async(req, res)=> {
    
    res.render('/')
}))


module.exports = router;
