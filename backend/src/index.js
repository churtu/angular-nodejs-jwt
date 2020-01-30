const express = require('express');
const config = require('./config');

// Database
require('./database');

// Initializations
const app = config(express());

// Server is listening
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});