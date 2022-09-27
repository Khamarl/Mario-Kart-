const express = require("express");
const cors = require("cors");
const logRoute = require("./logRoute");
const drivers = require("./drivers");

//Create app using express

const app = express();

// Setup middleware. Middleware is software that lies between an operating system and the applications running on it.
// Essentially functioning as hidden translation layer, middleware enables communication and data management for     distributed applications. 

app.use(cors()); // cors allows the app to communicate with external requests i.e POST
app.use(express.json()) // allows you to read the body of POST requests 
app.use(logRoute);

//Base root - gets information when you go onto page. This sets up different requests that the user may search 
app.get("/", (req , res) => {
    res.send("Welcome to the Mario Kart database")
})
// This setups request to send driver information 
app.get("/drivers", (req , res) => {
    res.send(drivers)
})

app.get("/drivers/:id", (req , res) => {

    try {
        const id = parseInt(req.params.id) // converts string id into a number 
        if(!id && id !== 0) {
            throw "Invalid input"
        } else if(id < 0 || id >= drivers.length) {
            throw "No driver information"
        }
        // filter through drivers array and sends their id
        
        const filtered = drivers.filter((driver) => driver.id == req.params.id )
            res.send(filtered[0])

    } catch (e) {
        res.status(401).send({error: e})
    }    
})



module.exports = app
