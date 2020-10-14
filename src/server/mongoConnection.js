// const { MongoClient, Server } = require('mongodb').Mongoclient;

// let client = undefined;

// exports.Initialize =  async function(host, port) {
//   console.log(`Initializing mongo at ${host} on port ${port}`);
//   client = new MongoClient(new Server(host, port));
//   await client.connect().then(() => exports.client = client).catch(err => console.log(`failure to connect to client: ${err}`));
// }

// exports.GetClient = () => client;

const MongoClient = require("mongodb").MongoClient;
const Server = require("mongodb").MongoClient;
const MONGOURI = "mongodb+srv://alexTest@cluster0.5uewh.mongodb.net/<dbname>?retryWrites=true&w=majority";

exports.Initialize = async function(host, port) {
  console.log(`Initializing mongo at ${host} on port ${port}`);
  const client = new MongoClient(MONGOURI, { useUnifiedTopology: true }, new Server(host, port));
  await client.connect(err => {
    // perform actions on the collection object; 
    console.log("connected in Mongo Connection >>>>>", client);
    client.close();
  })
}