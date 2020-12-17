// package imports;
const express = require("express");
const helmet =require('helmet');
const morgan = require('morgan')
const { argv } = require('yargs');
const bodyParser = require('body-parser');

const middlewares = require("./middlewares");

// Route imports;
const user = require("./routes/UserRoute");
const InitiateMongoServer = require('./mongoConnection');


// initiate express; 
const app = express();

// set ports; 
const port = argv.port || 3000;
const mongo_host = argv.mongohost || 'localhost'
const mongo_port = argv.mongoport || '27017'
console.log("Initializing Mongo >>>>");
InitiateMongoServer(mongo_host, mongo_port);
console.log("Mongo is connected >>>>> ");

// Middleware;
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self' 'unsafe-eval"], 
        scriptSrc: ["'self'"], 
        objectSrc: ["'none'"], 
        upgradeInsecureRequests: [],
    },
}));

// endpoints;
app.get("/", (req, res) => {
    res.json({
        message: "We are live!",
    })
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);


// Server;
app.listen(port, () => {
    console.log(`🌎 ===> server running at PORT ${port}`);
});
