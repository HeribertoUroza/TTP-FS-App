// ----LOCAL MODULES
const { getDbConnection } = require('./dbConnection/dbConnection');
const { dbAddress } = require('./dbConnection/dbAddress');

// ----USER SERVICE FUNCTIONS

    // ----CREATE USER
    const postReqUser = ( full_name, email, balance ) => getDbConnection(dbAddress).oneOrNone(
        `
            INSERT INTO users
                ( full_name, email, balance )
            VALUES
                ( $[full_name], $[email], $[balance] )
            RETURNING id
        `, { full_name, email, balance }
    );

    // ----GET USER BY EMAIL
    const getUser = email => getDbConnection(dbAddress).oneOrNone(
        `
            SELECT *
            FROM users
            WHERE email = $[email]
        `, { email }
    );

    // ----UPDATE USERS BALENCE
    const updateUser = ( balance, user_id ) => getDbConnection(dbAddress).oneOrNone(
        `
            UPDATE users
            SET
            balance = $[balance]
            WHERE users.id = $[user_id]
            RETURNING id, balance
        `, { balance, user_id }
    );


module.exports = {
    postReqUser,
    getUser,
    updateUser
}