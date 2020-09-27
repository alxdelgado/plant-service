exports.newPickup = function(req,res) {
  console.log("adding new pickup request");
  res.sendStatus(200);
}

/*
{
  timestamp: dateTime (UTC),
  address: string,
  user: string,
}
*/
