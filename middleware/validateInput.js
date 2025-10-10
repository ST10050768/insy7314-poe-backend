const { check, validationResult } = require('express-validator');

const validateRegistration = [
  check('fullName')
    .matches(/^[a-zA-Z\s]{2,50}$/)
    .withMessage('Full name must be alphabetic and 2-50 characters long'),

  check('idNumber')
    .isNumeric()
    .isLength({ min: 13, max: 13 })
    .withMessage('ID number must be exactly 13 digits'),

  check('accountNumber')
    .isAlphanumeric()
    .isLength({ min: 10, max: 16 })
    .withMessage('Account number must be 10-16 alphanumeric characters'),

  check('password')
    .isStrongPassword()
    .withMessage('Password must be strong (min 8 chars, mix of uppercase, lowercase, numbers, symbols)'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateRegistration };

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