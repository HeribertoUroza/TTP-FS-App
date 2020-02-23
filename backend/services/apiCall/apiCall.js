// ----API CALL
const { api } = require('./config');

// ----NPM MODULE
const axios = require('axios');

const getApiData = ticker => {
    let data = axios.get(`${api.testUrl}${ticker}${api.testKey}`)
                    .then( response => {
                        response.data
                        return response.data
                    })
                    .catch( error => {
                        return error.toString()
                    })

    //axios.get(`${api.liveUrl}${ticker}${api.liveKey}`)
    return data;

}

export default getApiData;