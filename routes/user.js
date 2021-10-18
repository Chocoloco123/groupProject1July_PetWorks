var express = require('express');
var router = express.Router();
// const { loginUser, logoutUser } = require('../auth')
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', csrfProtection, (req, res) => {
  const user = db.User.build();

  res.render('user-register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken()
  })
})

const userValidators = [
  check('firstName')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for First Name')
      .isLength({ max: 50 })
      .withMessage('First Name must not be more than 50 characters long'),
  check('lastName')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Last Name')
      .isLength({ max: 50 })
      .withMessage('Last Name must not be more than 50 characters long'),
  check('emailAddress')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Email Address')
      .isLength({ max: 255 })
      .withMessage('Email Address must not be more than 255 characters long')
      .isEmail()
      .withMessage('Email Address is not a valid email')
      .custom((value) => {
          return db.User.findOne({ where: { emailAddress: value } })
              .then((user) => {
                  if (user) {
                      return Promise.reject('The provided Email Address is already in use by another account');
                  }
              });
      }),
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Username')
    .isLength({ max: 50 })
    .withMessage('Username must not be more than 50 characters long')
    .custom((value) => {
      return db.User.findOne({ where: { username: value } })
          .then((user) => {
              if (user) {
                  return Promise.reject('The provided Username is already in use by another account');
              }
          });
  }),
  check('password')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Password')
      .isLength({ max: 255 })
      .withMessage('Password must not be more than 255 characters long')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
      .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Confirm Password')
      .isLength({ max: 255 })
      .withMessage('Confirm Password must not be more than 255 characters long')
      .custom((value, { req }) => {
          if (value !== req.body.password) {
              throw new Error('Confirm Password does not match Password');
          }
          return true;
      }),
];

router.post('/register', csrfProtection, asyncHandler (async(req, res) => {
  
  const { username, firstName, lastName, emailAddress, password } = req.body;
    const user = db.User.build({
        username,
        firstName,
        lastName,
        emailAddress
    });

    const validatorErrors = validationResult(req)

    if (validatorErrors.isEmpty()) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.hashedPassword = hashedPassword;
        await user.save();
        // loginUser(req, res, user);
        res.redirect('/');
    } else {
        const errors = validatorErrors.array().map((err) => err.msg);

        res.render('user-register', {
            title: 'Register',
            user,
            errors,
            csrfToken: req.csrfToken()
        })
    }
}));

router.get('/login', csrfProtection, (req,res) => {
    res.render('user-login', { 
        title: 'Login',
        csrfToken: req.csrfToken()
    })
})

const loginValidators = [
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Username'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Password'),
];

router.post('/login', csrfProtection, loginValidators,asyncHandler(async(req,res) => {
        const {
        username,
        password,
        } = req.body;

        let errors = [];
        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {

        const user = await db.User.findOne({ where: { username } });

        if (user !== null) {
            
            const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

            if (passwordMatch) {

            // loginUser(req, res, user);
            return res.redirect('/');
            }
        }

        errors.push('Login failed for the provided username and password');
        } else {
        errors = validatorErrors.array().map((error) => error.msg);
        }

        res.render('user-login', {
        title: 'Login',
        username,
        errors,
        csrfToken: req.csrfToken(),
        });
    
}));

module.exports = router;
