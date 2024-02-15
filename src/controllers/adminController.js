const { validationResult } = require("express-validator");
const { Student } = require("../models/Student");

let adminControler = (req, res) => {
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    const studentObj = new Student({
      name: req.query.name,
      surname: req.query.surname,
    });
    studentObj.save().then((d) => {
      res.json({ msg: "yeh mere india" });
    });
  } else {
    res.status(400).json({ msg: " fill block properly" });
  }
};

module.exports = { adminControler };
