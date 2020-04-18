const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');

//registering a doctor
module.exports.register = async function(req, res){
  try{
    let doctor = await Doctor.findOne({username: req.body.username});
    if(!doctor){
      doctor = await Doctor.create(req.body);
      if(doctor){
        return res.status(200).json({
          message: "Registration successful"
        });
      }
    }
    else{
      return res.status(400).json({
        message: "Doctor already exists"
      });
    }
  }catch(err){
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

// login method for doctor
module.exports.login = async function(req, res){
  try{
    let doctor = await Doctor.findOne({username: req.body.username});
    console.log(doctor);
    if(!doctor || doctor.password != req.body.password){
      return res.status(401).json({
        message: "Please Check authentication credentials"
      });
    }
    doctor = doctor.toJSON();
    delete doctor.password;
    return res.status(200).json({
      message: "successfully logged in",
      token: jwt.sign(doctor, 'corona', {expiresIn: '100000'})
    })
  }catch(err){
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
}