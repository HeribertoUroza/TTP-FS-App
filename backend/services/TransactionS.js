// ----LOCAL MODULES
const { getDbConnection } = require('./dbConnection/dbConnection');
const { dbAddress } = require('./dbConnection/dbAddress');

// ----TRANSACTION SERVICE FUNCTIONS

    // ----CREATE A TRANSACTION
    const postReqTransaction = ( name, ticker, amount, quantity, status, user_id ) => getDbConnection(dbAddress).oneOrNone(
        `
            INSERT INTO transactions
                ( name, ticker, amount, quantity, status, user_id )
            VALUES
                ( $[name], $[ticker], $[amount], $[quantity], $[status], $[user_id] )
            RETURNING id
        `, { name, ticker, amount, quantity, status, user_id }
    )

    // ----GET ALL TRANSACTIONS BY USER
    const getAllTransactions = ( user_id ) => getDbConnection(dbAddress).any(
        `
            SELECT *
            FROM transactions
            WHERE user_id = $[user_id]
        `, { user_id }
    )

module.exports = {
    postReqTransaction,
    getAllTransactions
}