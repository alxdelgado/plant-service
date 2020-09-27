# Plant Server

The plant server is very simple. There are 2 endpoints.

## Running

Ensure mongo is running on local host and running at the default 
`27017` port. Run `npm start` in the server directory to run locally.

## General

All endpoints should require the header `user-id` in the request.
The `user-id` should be a unique id. For testing I've been using
strings, but eventually guids related to customer-id are probably 
the way to go. 

## MyPickups

The default endpoint is MyPickups. Calling `/` with the `user-id`
will return all the pickups with the given user id.

Calling with the query param `id` and providing the hex encoded 
mongo id (can be found in the response from the server in the form
of `5f71039a335f1a67838dd87c`) will return a single json object 
representing that particular pickup.

## New Pickup

A new pickup is added to the database. The `user-id` should be provided
in the header. A server-generated timestamp is added to the data upon receipt.
Whatever JSON data is in the body of the request is added into the mongo
db.