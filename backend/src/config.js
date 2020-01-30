const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const routes = require('./routes');

module.exports = app =>{

    // Settings
    app.set('port', process.env.PORT || 3000);
    
    // Middlewares
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(morgan('dev'));

    // Routes
    app.use('/api',routes);

    return app;
}