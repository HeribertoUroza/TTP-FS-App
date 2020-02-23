// ----LOCAL MODULES
const { getDbConnection } = require('./dbConnection/dbConnection');
const { dbAddress } = require('./dbConnection/dbAddress');

// ----PORTFOLIO SERVICE FUNCTIONS

    // ----ADD STOCK TO PORTFOLIO
    const postReqStock = ( name, ticker, current_value, quantity, user_id ) => getDbConnection(dbAddress).oneOrNone(
        `
            INSERT INTO portfolio
                ( name, ticker, current_value, quantity, user_id )
            VALUES
                ( $[name], $[ticker], $[current_value], $[quantity], $[user_id] )
            RETURNING id
        `, { name, ticker, current_value, quantity, user_id }
    );


    // ----SELL STOCK TO PORTFOLIO

module.exports = {
    postReqStock,
}