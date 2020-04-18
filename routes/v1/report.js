const express = require('express');
const router = express.Router();
const passport = require('passport');

//include reports controller 
const reportsController = require('../../controllers/report_controller');

router.get('/:status', passport.authenticate('jwt', {session:false}), reportsController.getAllReports);

module.exports = router;