// ----NPM MODULES
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// ----EXPRESS ROUTERS
const { getUserRouter } = require('./routes/users');
const { getPortfolioRouter} = require('./routes/portfolio');

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

    // ----ROUTERS
    app.use('/user', getUserRouter());
    app.use('/portfolio', getPortfolioRouter());

    return app;
}

module.exports = {
    getApp,
}