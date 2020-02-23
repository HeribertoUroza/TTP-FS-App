// ----LOCAL FUNCTION
const { getApiData } = require('../services/apiCall/apiCall');

// ----NPM MODULES
const express = require('express');

// ----GET API DATA
const getData = ( request, response ) => {
    const { ticker } = request.params;

    getApiData(ticker)
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

// ----API ROUTER
const getApiRouter = _=> {
    const apiRouter = express.Router();

    apiRouter.get('/:ticker', getData)

    return apiRouter;
}

module.exports = {
    getApiRouter
}