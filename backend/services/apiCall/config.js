// ----API KEYS AND URL
const api = {
    testUrl: 'https://sandbox.iexapis.com/stable/stock/market/batch?symbols=',
    testKey: '&types=quote&range=1w&last=5&token=Tsk_ad3ef3d9f15942459b622a4e3974f3cf',

    liveUrl: 'https://cloud.iexapis.com/stable/stock/market/batch?symbols=',
    liveKey: '&types=quote&range=1w&last=5&token=sk_a3c5712d5dc54a0dbf8c4a1e3ed8eef0'
};

module.exports = {
    api
};