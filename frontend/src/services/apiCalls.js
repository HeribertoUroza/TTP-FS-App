import axios from 'axios';

// ----CREATE USER
const createUser = ( full_name, email ) => {
    return axios({
        method: 'post',
        url: 'http://localhost:3001/user/',
        data: {
            full_name: full_name,
            email: email,
            balance: 5000
        }
    })

} 

// ----GET PORTFOLIO BY EMAIL
const getPortfolio = email => {
    return axios({
        method: 'get',
        url: `http://localhost:3001/portfolio/${email}`
    })
}

// ----GET TICKER INFO FROM API
const getTickerInfo = symbol => {
    return axios({
        method: 'get',
        url: `http://localhost:3001/api/${symbol}`
    })
}

// ----GET TRANSACTIONS BY EMAIL
const getTransaction = email => {
    return axios({
        method: 'get',
        url: `http://localhost:3001/transaction/${email}`
    })
}

// ----ADD STOCK TO PORTFOLIO
const addStocktoPortfolio = ( name, ticker, current_value, quantity, user_id ) => {
    return axios({
        method: 'post',
        url: 'http://localhost:3001/portfolio/',
        data: {
            name: name,
            ticker: ticker,
            current_value: current_value,
            quantity: quantity,
            user_id: user_id
        }
    })
}

// ----GET USER
const getUser = email => {
    return axios({
        method: 'get',
        url: `http://localhost:3001/user/${email}`
    })
}

// ----ADD STOCK TO TRANSACTIONS
const addToTransactions = (name, ticker, amount, quantity, status, user_id) => {
    return axios({
        method: 'post',
        url: `http://localhost:3001/transaction/${user_id}`,
        data: {
            name: name,
            ticker: ticker,
            amount: amount,
            quantity: quantity,
            status: status,
        }
    })
}

// ----UPDATE USERS BALANCE
const updateUserBalance = ( balance, user_id ) => {
    return axios({
        method: 'put',
        url: `http://localhost:3001/user/${user_id}`,
        data: {
            balance: balance
        }
    })
}

export {
    createUser,
    getPortfolio,
    getTickerInfo,
    getTransaction,
    addStocktoPortfolio,
    getUser,
    addToTransactions,
    updateUserBalance
}