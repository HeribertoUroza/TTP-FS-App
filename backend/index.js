// ----LOCAL MODULE
const { getApp } = require('./app');

// ----EXPRESS APP
getApp().listen(3001, _=> {
    console.log('Server is Listening on port: 3001');
});