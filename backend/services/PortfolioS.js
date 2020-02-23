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


    // ----UPDATE STOCK ON PORTFOLIO
    const putReqStock = ( user_id, name, current_value, quantity ) => getDbConnection(dbAddress).oneOrNone(
        `
            UPDATE portfolio
            SET
                current_value = $[current_value],
                quantity = $[quantity]
            WHERE
                portfolio.user_id = $[user_id]
            AND
                portfolio.name = $[name]
            RETURNING name, current_value, quantity
        `, { user_id, name, current_value, quantity }
    ); 

    // ----DELETE STOCK WHEN QUANTITY REACHES 0
    const delReqStock = ( user_id, name ) => getDbConnection(dbAddress).oneOrNone(
        `
            DELETE FROM portfolio
            WHERE
                portfolio.user_id = $[user_id]
            AND 
                portfolio.name = $[name]
        `, { user_id, name }
    )

module.exports = {
    postReqStock,
    putReqStock,
    delReqStock
}