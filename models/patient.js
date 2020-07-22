const mongoose = require('mongoose');

//create patient schema
const patientSchema = new mongoose.Schema({
  phone: {
    type: Number,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10
  }
});

const Patient = mongoose.model("patient", patientSchema);
module.exports = Patient;