const { mongoose } = require("../db/db");

const Student = mongoose.model("student", { name: String, surname: String });

exports.Student = Student;
