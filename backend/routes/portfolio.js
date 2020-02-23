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

// ----UPDATE STOCK IN PORTFOLIO
const updateStock = ( request, response ) => {
    const { user_id } = request.params;
    const { name, current_value, quantity } = request.body;

    PortfolioService.putReqStock(user_id, name, current_value, quantity)
        .then(data => {
            response.status(200).json({
                message: 'Success',
                data
            });
        })
        .then( error => {
            message: error.toString()
        });
};

// ----PORTFOLIO ROUTER
const getPortfolioRouter = _=> {
    const PortfolioRouter = express.Router();

    PortfolioRouter.post('/', addStock);
    PortfolioRouter.put('/:user_id', updateStock);

    return PortfolioRouter;
}

module.exports = {
    getPortfolioRouter
}