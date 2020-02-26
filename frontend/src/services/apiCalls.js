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

export {
    createUser,
    getPortfolio,
}