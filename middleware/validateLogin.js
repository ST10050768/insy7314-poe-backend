const { check, validationResult } = require('express-validator');

const validateLogin = [
  check('username').notEmpty().withMessage('Username is required'),
  check('password').notEmpty().withMessage('Password is required'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateLogin };

/*
Code Attribution
Code by Kuhlmann, A. and Verma, S.
Link:https://stackoverflow.com/questions/55772477/how-to-implement-validation-in-a-separate-file-using-express-validator
Accessed: 8 October 2025

const {check, validationResult} = require('express-validator');

exports.validateUser = [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('User name can not be empty!')
    .bail()
    .isLength({min: 3})
    .withMessage('Minimum 3 characters required!')
    .bail(),
  check('email')
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage('Invalid email address!')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];
 */