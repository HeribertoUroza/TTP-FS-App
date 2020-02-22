// ----NPM MODULES
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// ----FUNCTION THAT RETURNS APP
const getApp = _=> {
    const app = express();

    // ----MIDDLEWARE
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // ----TEST CONNECTION
    app.get('/ping', (req, res) => {
        res.json({
            message: '🏓 '
        });
    });

    return app;
}

module.exports = {
    getApp,
}