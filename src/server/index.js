const express = require('express');
const app = express();
const {argv} = require('yargs');

const {newPickup} = require('./newPickup');

const port = argv.port || 3000;

app.post('/new', newPickup);

app.listen(port,() => {
    console.log(`Running server at http://localhost:${port}`);
});
