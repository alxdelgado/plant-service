// package imports;
const express = require('express');
const helmet = require("helmet");
const { argv } = require('yargs');
const bodyParser = require('body-parser');
const morgan = require('morgan');
console.log(morgan);

// Route imports;
const user = require("./routes/getUser");
// const {newPickup} = require('./newPickup');
// const {myPickups, getPickup} = require('./myPickups');
const { Initialize } = require('./mongoConnection');


// initiate express; 
const app = express();

// set ports; 
const port = argv.port || 3000;
const mongo_host = argv.mongohost || 'localhost'
const mongo_port = argv.mongoport || '27017'
console.log("Initializing Mongo >>>>");
Initialize(mongo_host, mongo_port);
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

// Routes;
// app.get('/', myPickups);
// app.post('/new', newPickup);
app.post("/", user);


// Server;
app.listen(port, () => {
    console.log(`🌎 ===> spaceship running at PORT ${port}`);
});
