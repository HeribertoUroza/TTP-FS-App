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


module.exports = {
    postReqUser,
    getUser
}