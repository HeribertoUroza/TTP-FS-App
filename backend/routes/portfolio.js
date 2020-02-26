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
            if(!data){
                response.status(400).json({
                    message: 'Something Went Wrong'
                })
                return;
            }

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

// ----DELETE STOCK
const deleteStock = ( request, response ) => {
    const { user_id } = request.params;
    const { name } = request.body;

    PortfolioService.delReqStock( user_id, name )
        .then( data => {
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

// ----GET ALL STOCKS BY USER ID
const getStocks = ( request, response ) => {
    const { email } = request.params;

    PortfolioService.getAllReqStocks( email )
        .then( data => {
            response.status(200).json({
                message: 'Success',
                data
            })
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
    PortfolioRouter.put('/:user_id', updateStock);
    PortfolioRouter.delete('/:user_id', deleteStock);
    PortfolioRouter.get('/:email', getStocks)

    return PortfolioRouter;
}

module.exports = {
    getPortfolioRouter
}