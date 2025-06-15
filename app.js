const express = require("express")
const dotenv = require("dotenv")
const database = require("./database/database")
dotenv.config({path: `${__dirname}/config.env`})
const cors = require("cors")
const { handleChatRequest } = require("./controllers/aiController");
const { signup, login } = require("./controllers/userController");
const { getPocvi, createPocva, addSamplePochvi, chatAboutPochva } = require("./controllers/pocvaController");


const app = express();

app.use(cors());


database.connectDatabase();
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post(`/api/v1/ai`, handleChatRequest)
app.post(`/api/v1/signup`, signup)
app.post(`/api/v1/login`, login)

app.post(`/api/v1/pochva`, createPocva)
app.get(`/api/v1/pochva`, getPocvi)
app.post(`/api/v1/pochva/samples`, addSamplePochvi)
app.post(`/api/v1/pochva/chat`, chatAboutPochva)


app.listen(process.env.PORT, (err) => {
    if (err){
        console.log("Failed to start the server.");
    }
    console.log(`Server started successfully ${process.env.PORT}`)
})