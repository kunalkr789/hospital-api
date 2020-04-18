const report = require('../models/report');

//get all reports
module.exports.getAllReports = async function(req, res){
  try{
    reportsModel.find({status: status}, (err, report)=>{
        if (err) {
            return res.send({
                status: 404,
                message: err
            })
        } else {
            return res.send({
                status: 200,
                data: report
            });
        }
    });
  }catch(err){
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
}