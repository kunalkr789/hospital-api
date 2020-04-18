const express = require('express');

//create a router
const router = express.Router();

//include doctors controller to process the correspondinga actions
const doctorsController = require('../../controllers/doctor_controller');

router.post('/register', doctorsController.register);
router.post('/login', doctorsController.login);

//export router
module.exports = router;