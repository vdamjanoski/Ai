const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({path: `${__dirname}/../config.env`})

exports.connectDatabase = async() => {
    try{
        await mongoose.connect(`mongodb+srv://vladimirdamjanoski23:${process.env.DATABASE_PASSWORD}@cluster0.9sxxj.mongodb.net/CohereAi?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("Connected to database");
    } catch(err){
        console.log(err.message);
    }
}