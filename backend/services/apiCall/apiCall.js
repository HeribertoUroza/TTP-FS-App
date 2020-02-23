// ----API CALL
const { api } = require('./config');

const getApiData = ticker => {
    //return `${api.liveUrl}${ticker}${api.liveKey}`
    return `${api.testUrl}${ticker}${api.testKey}`
}

console.log(getApiData('fb'))