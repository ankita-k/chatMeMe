const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
var socket = require('socket.io');
var mongoose = require('mongoose');
// const config=require('./server/config/database');

// var User = require('./server/api/customer/customer.model');


// Get our API routes

mongoose.connect('mongodb://localhost/chat-app');
mongoose.connection.on('error', function (err) {
    console.log('mongodb connection failed:' + err);
});

const app = express();

//CORS Middleware
app.use(cors());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Body Parser Middleware
app.use(bodyParser.json());
// Set our api routes
require('./routes')(app);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.js'));
});

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

socket = socket.listen(server);

socket.on('connection', function(connection) 
{
    console.log('User Connected');
    connection.on('message', function(msg)
    {
        socket.emit('message', msg);
    });
});

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

