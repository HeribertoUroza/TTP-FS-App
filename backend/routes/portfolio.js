// ----LOCAL MODULES
const PortfolioService = require('../services/PortfolioS');

// ----NPM MODULES
const express = require('express');

// ----ADD STOCK TO PORTFOLIO
const addStock = ( request, response ) => {
    const { name, ticker, current_value, quantity, user_id } = request.body;

    PortfolioService.postReqStock(name, ticker, current_value, quantity, user_id)
        .then(data => {
            response.status(200).json({
                message: 'Success',
                data
            });
        })
        .catch( error => {
            response.status(400).json({
                message: error.toString()
            })
        });
};

// ----PORTFOLIO ROUTER
const getPortfolioRouter = _=> {
    const PortfolioRouter = express.Router();

    PortfolioRouter.post('/', addStock);

    return PortfolioRouter;
}

module.exports = {
    getPortfolioRouter
}