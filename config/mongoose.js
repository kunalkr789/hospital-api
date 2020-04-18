const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hospital-api');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting MongoDB'));

db.once('open', function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db;