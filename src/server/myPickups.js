const {ObjectID} = require('mongodb');

exports.myPickups = function(req,res){
  if (req.query.id)
    return getPickup(req,res);
  let {client} = require('./mongoConnection');
  let usrId = req.header('user-id');
  let collection = client.db('plants').collection('pickups');
  collection.find({'user-id':usrId}).toArray().then(result => {
    res.send(result);
  });
}

function getPickup (req,res){
  let {client} = require('./mongoConnection');
  let id = ObjectID.createFromHexString(req.query.id);
  let collection = client.db('plants').collection('pickups');
  collection.findOne(id).then(result => {res.send(result)});
}