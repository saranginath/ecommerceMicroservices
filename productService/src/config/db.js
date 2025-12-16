const mongoose = require('mongoose');

const connectDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
    }
    catch(err){
        console.log("Mongodb connection failed", err.message)
        process.exit(1);
    }
}
module.exports = connectDb;