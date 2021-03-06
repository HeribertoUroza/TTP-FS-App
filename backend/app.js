// ----NPM MODULES
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// ----EXPRESS ROUTERS
const { getUserRouter } = require('./routes/users');
const { getPortfolioRouter } = require('./routes/portfolio');
const { getTransactionRouter } = require('./routes/transaction');
const { getApiRouter } = require('./routes/api');

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
    app.use('/transaction', getTransactionRouter());
    app.use('/api', getApiRouter());

    return app;
}

module.exports = {
    getApp,
}