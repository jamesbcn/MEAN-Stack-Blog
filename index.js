const express = require('express');
var cors = require('cors');
const app = express();
const router = express.Router(); // Creates a new router object.
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const blogs = require('./routes/blogs')(router);
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

// Database Connection
mongoose.connect(config.uri, (err)=>{
    (err) ? console.log(`Could not connect to ${config.db}: ${err}`)
    : console.log(`Now connected to ${config.db}...`);
});

// Middleware
app.use(cors({origin: 'http://localhost:4200'}));
app.use(bodyParser.urlencoded({ extended: false })); // parse x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
//app.use(express.static(__dirname + '/client/dist')); // Provide static directory for frontend. Change for public to /public
app.use(express.static(__dirname + '/public')); // deploy
app.use('/authentication', authentication);
app.use('/blogs', blogs);

app.get('*', (req, res) => { // We only need one route for the server so we can use * instead of /
    //res.send(__dirname + '/client/dist/index.html'); 
    res.send(__dirname + '/public/index.html'); // deploy
  });

// Start Server: Listen on port 8080
app.listen(port, () => {
    console.log('Listening on port ' + port);
});