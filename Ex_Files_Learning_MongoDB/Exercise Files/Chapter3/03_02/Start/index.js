var MongoClient = require('mongodb').MongoClient,
    Hapi = require('hapi');

var url = 'mongodb://localhost:27017/learning_mongo'

var server = new Hapi.Server();
server.connection({
    port:8080
})

server.route( [
    // Get tour list
    {
        method: 'GET',
        path: '/api/tours',
        config: {json: {space: 2} },
        handler: function(request, reply) {
            var findObj = {};
            for ( var key in request.query){
                findObj[key] = request.query[key]
            }
            collection.find(findObj).toArray(function(err,tours){
                 reply (tours);
            })
           
        }
    },
    // Add new tour
    {
        method: 'POST',
        path: '/api/tours',
        handler: function(request, reply) {
            reply ("Adding new tour");
        }
    },
    // Get a single tour
    {
        method: 'GET',
        path: '/api/tours/{name}',
        handler: function(request, reply) {
            collection.findOne({"tourName":request.params.name},function(err,tour){
                reply(tour)
            })
        }
    },
    // Update a single tour
    {
        method: 'PUT',
        path: '/api/tours/{name}',
        handler: function(request, reply) {
            // request.payload variables
            reply ("Updating " + request.params.name);
        }
    },
    // Delete a single tour
    {
        method: 'DELETE',
        path: '/api/tours/{name}',
        handler: function(request, reply) {
            reply ("Deleting " + request.params.name).code(204);
        }
    },
    // Home page
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply( "Hello world from Hapi/Mongo example.")
        }
    }
])

MongoClient.connect(url, function(err, db) {
    console.log("connected correctly to server");
    collection = db.collection('tours');
    server.start(function(err) {
        console.log('Hapi is listening to http://localhost:8080')
    })
})