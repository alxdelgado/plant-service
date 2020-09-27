const {MongoClient,Server} = require('mongodb');

var client = undefined;

exports.Initialize = function(host,port){
  console.log(`Initializing mongo at ${host} on port ${port}`);
  client = new MongoClient(new Server(host,port));
  client.connect().then(() => exports.client = client).catch(err => console.log(`failure to connect to client: ${err}`));
}

exports.GetClient = () => client;