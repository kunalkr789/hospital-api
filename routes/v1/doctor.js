const express = require('express');
const router = express.Router();

//include doctors controller
const doctorsController = require('../../controllers/doctor_controller');

router.post('/register', doctorsController.register);
router.post('/login', doctorsController.login);

module.exports = router;