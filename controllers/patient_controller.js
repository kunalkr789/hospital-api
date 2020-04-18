const Patient = require('../models/patient');
const Doctor = require('../models/doctor');
const Report = require('../models/report');

// for registering a new patient
module.exports.registerPatient = async function(req, res){
  try{
    let patient = await Patient.findOne({phone: req.body.phone});
    if(patient){
      return res.status(200).json({
        message: "Patient already registered",
      })
    }
    else{
      await Patient.create({
        phone: req.body.phone
      });
      return res.status(200).json({
        message: "Patient registered successfully"
      })
    }
  }catch(err){
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

//create a new report
module.exports.createReport = async function(req, res){
  try{
    let doctor = await Doctor.findById(req.user.id);
    let patient = await Patient.findById(req.params.id);
    if(doctor && patient){
      let statusArray = ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'];
      let status = statusArray[Math.floor(Math.random() * statusArray.length)];
      let report = await Report.create({
        doctor: doctor._id,
        patient: patient._id,
        status: status,
      });
      patient.reports.push(report.id);
      patient.save();

      return res.status(200).json({
        message: "Report created successfully",
        report: report
      });
    }
  }catch(err){
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
}

//get all reports
module.exports.allReports = async function(req, res){
  try{
    let report = await Patient.findById(req.params.id)
    .sort('-createdAt')
    .exec();
    return res.status(200).json({
        message: report
    });
  }catch(err){
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
}