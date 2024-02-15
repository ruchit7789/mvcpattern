const { check } = require("express-validator");

let studentValidator = [
  check("name", "first name is required").isEmpty(),
  check("surname", "surname  is required").isEmpty(),
];

exports.studentValidator = studentValidator;
