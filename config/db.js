const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/adminpanel-6pm')

const db = mongoose.connection;

db.on("connected",(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("DB is start");
})

module.exports = db;

