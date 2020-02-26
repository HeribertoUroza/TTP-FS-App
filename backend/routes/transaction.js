// ----LOCAL MODULES
const TransactionServices = require('../services/TransactionS');

// ----NPM MODULES
const express = require('express');

// ----ADD TRANSACTION
const addTransaction = ( request, response ) => {
    const { user_id } = request.params;
    const { name, ticker, amount, quantity, status } = request.body;

    TransactionServices.postReqTransaction(name, ticker, amount, quantity, status, user_id)
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

// ----GET ALL TRANSACTIONS BY USER
const getTransactions = ( request, response ) => {
    const { email } = request.params;

    TransactionServices.getAllTransactions(email)
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

//  ----TRANSACTION ROUTER
const getTransactionRouter = _=> {
    const TransactionRouter = express.Router();

    TransactionRouter.post('/:user_id', addTransaction);
    TransactionRouter.get('/:email', getTransactions);

    return TransactionRouter;
}

module.exports = {
    getTransactionRouter
}