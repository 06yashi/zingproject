const express = require("express");
const {findApplicant}=require("../controller/findApplicantController.js")
const Router = express.Router();
Router.get("/findApplicant", findApplicant);
module.exports = Router;
