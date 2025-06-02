const express = require("express")
const dotenv = require("dotenv")
const database = require("./database/database")
dotenv.config({path: `${__dirname}/config.env`})
const { handleChatRequest } = require("./controllers/aiController");
const { signup, login } = require("./controllers/userController");
const { getPocvas, createPocva } = require("./controllers/pocvaController");

const app = express();

//middlewares

database.connectDatabase();
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post(`/api/v1/ai`, handleChatRequest)
app.post(`/api/v1/signup`, signup)
app.post(`/api/v1/login`, login)

app.post(`/api/v1/create`, createPocva)
app.get(`/api/v1/getAll`, getPocvas)

app.listen(process.env.PORT, (err) => {
    if (err){
        console.log("Failed to start the server.");
    }
    console.log(`Server started successfully ${process.env.PORT}`)
})