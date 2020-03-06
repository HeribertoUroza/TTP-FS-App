// ----LOCAL MODULES
const UserService = require('../services/userS');

// ----NPM MODULES
const express = require('express');

// ----CREATE USER
const createUser = ( request, response ) => {
    const { full_name, email, balance } = request.body;

    UserService.postReqUser( full_name, email, balance )
        .then(data => {
            response.status(200).json({
                message: 'Success',
                data
            });
        })
        .catch( error => {
            response.status(400).json({
                message: error.toString()
            });
        });
};

// ----GET USER
const getUser = ( request, response ) => {
    const { email } = request.params;

    UserService.getUser( email )
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
        })
}

// ----UPDATE USERS BALENCE
const updateUser =  ( request, response ) => {
    const { user_id } = request.params;
    const { balance } = request.body;

    UserService.updateUser( balance, user_id )
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

// ----USER ROUTER
const getUserRouter = _=> {
    const UserRouter = express.Router();

    UserRouter.post('/', createUser );
    UserRouter.get('/:email', getUser);
    UserRouter.put('/:user_id', updateUser);

    return UserRouter;
}

module.exports = {
    getUserRouter
}