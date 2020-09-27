exports.newPickup = function(req,res) {
  let {client} = require('./mongoConnection');
  console.log("adding new pickup request");
  let data = req.body;
  data['user-id'] = req.header('user-id');
  data['timestamp'] = Date.now();
  let collection = client.db('plants').collection('pickups');

  collection.insertOne(data)
    .then(() => res.sendStatus(200))
    .catch(err => console.log("error inserting into mongo: " + err));
}

/*
{
  timestamp: dateTime (UTC),
  address: string,
  user: string,
}
*/
