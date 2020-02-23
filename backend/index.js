// ----LOCAL MODULE
const { getApp } = require('./app');

// ----EXPRESS APP
getApp().listen(3000, _=> {
    console.log('Server is Listening');
});