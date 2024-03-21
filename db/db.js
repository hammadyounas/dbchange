const mongoose = require('mongoose');
// const { MONGO_DB_URL } = require('../config/config');
async function connectDb() {
    try {
        await mongoose.connect(
          "mongodb+srv://saimshehzad2030:isb8Syqe3DamfV1r@cluster0.096xvbs.mongodb.net/Parkify"
        );
        console.log("Database connected successfully!")
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectDb