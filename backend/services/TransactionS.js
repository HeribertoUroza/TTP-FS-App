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

    // ----GET ALL TRANSACTIONS BY EMAIL
    const getAllTransactions = ( email ) => getDbConnection(dbAddress).any(
        `
            SELECT *
            FROM users
            INNER JOIN transactions
            ON users.id = transactions.user_id
            WHERE users.email = $[email]
        `, { email }
    )

module.exports = {
    postReqTransaction,
    getAllTransactions
}