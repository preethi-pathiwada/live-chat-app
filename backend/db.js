const mongoose = require("mongoose");

const connectDB = async() => {
   try{
    mongoose.connect(`"mongodb+srv://clusterlivechat.ykp9n.mongodb.net/" --apiVersion 1 --username preethi123`, {
        newUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("MongoDB Connected");
   }
   catch(e){
    console.log("Error Occured:", e);
    process.exit(1);
   }
};

module.exports = connectDB