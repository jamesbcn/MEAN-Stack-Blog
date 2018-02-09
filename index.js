const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // Config issue with mongoose
const config = require('./config/database');
const path = require('path'); // Import path module

mongoose.connect(config.uri, (err)=>{
    (err) ? console.log(`Could not connect to ${config.db}: ${err}`)
    : console.log(`Now connected to ${config.db}...`);
});

app.use(express.static(__dirname + '/client/dist/')); // allows access to ng directory

app.get('*', (req, res) => { // We only need one route for the server so we can use * instead of /
    res.send(__dirname + '/client/dist/index.html');
  });

// Start Server: Listen on port 8080
app.listen(8080, () => {
    console.log('Listening on port 8080');
  });