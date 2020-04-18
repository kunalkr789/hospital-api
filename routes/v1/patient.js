const express = require('express');
const router = express.Router();
const passport = require('passport');

//include patients controller 
const patientsController = require('../../controllers/patient_controller');

//authenticate using jwt strategy
router.get('/:id/create_report', passport.authenticate('jwt', {session:false}), patientsController.createReport);
router.get('/:id/all_reports', passport.authenticate('jwt', {session:false}), patientsController.allReports);
router.post('/', passport.authenticate('jwt', {session:false}), patientsController.registerPatient);

//export router
module.exports = router;