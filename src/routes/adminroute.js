const express = require("express");
const { adminControler } = require("../controllers/adminController");
const { studentValidator } = require("../validators/StudentValidator");

const adminRoute = express.Router();

adminRoute.get("/admin/save_students", studentValidator, adminControler);

exports.adminRoute = adminRoute;
