const express = require("express");
const cors = require("cors")

//Create app using express

const app = express();

// Setup middleware. Middleware is software that lies between an operating system and the applications running on it.
// Essentially functioning as hidden translation layer, middleware enables communication and data management for     distributed applications. 

app.use(cors()); // cors allows the app to communicate with external requests i.e POST
app.use(express.json()) // allows you to read the body of POST requests 

module.exports = app
