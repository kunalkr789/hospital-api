const express = require("express");
const router = express.Router();
const doctorRouter = require("./doctor");
const patientsRouter = require("./patient");
const reportsRouter = require("./report");

//redirect all the routes to corresponding files
router.use("/doctors", doctorRouter);
router.use("/patients", patientsRouter);
router.use("/reports", reportsRouter);

module.exports = router;
