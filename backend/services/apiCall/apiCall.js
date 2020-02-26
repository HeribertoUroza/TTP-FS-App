// ----API CALL
const { api } = require('./config');

// ----NPM MODULE
const axios = require('axios');

const getApiData = ticker => {
    let data = axios.get(`${api.liveUrl}${ticker}${api.liveKey}`)
                    .then( response => {
                        response.data
                        return response.data
                    })
                    .catch( error => {
                        return error.toString()
                    })
    return data;

}

module.exports = {
    getApiData
}