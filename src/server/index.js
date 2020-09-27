const express = require('express');
const app = express();
const {argv} = require('yargs');
const bodyParser = require('body-parser');

const {newPickup} = require('./newPickup');
const {myPickups, getPickup} = require('./myPickups');

const {Initialize} = require('./mongoConnection');

const port = argv.port || 3000;
const mongo_host = argv.mongohost || 'localhost'
const mongo_port = argv.mongoport || '27017'

console.log("Initializing mongo...");
Initialize(mongo_host,mongo_port);
console.log("Mongo initialized.");

var jsonParser = bodyParser.json();

app.use(jsonParser);

app.get('/', myPickups);
app.post('/new', newPickup);

app.listen(port,() => {
    console.log(`Running server at http://localhost:${port}`);
});
