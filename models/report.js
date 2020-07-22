const mongoose = require('mongoose');

//create report schema
const reportSchema = new mongoose.Schema({
    doctor_id: {
        ref: 'doctor',
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    patient_id: {
        ref: 'patient',
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: String,
        enum: ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine", "Positive-Admit"],
        required: true
    }
}, {timestamps: true}
);


const Report = mongoose.model("report", reportSchema);
module.exports = Report;