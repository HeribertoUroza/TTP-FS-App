import React from 'react';
import firebase from '../../firebase/config';

// ----CONTEXT
import AuthContext from '../../context/AuthContext';

// ----COMPONENT
import NavBar from '../../components/NavBar';
import PortfolioInfo from '../../components/PortfolioInfo';

// ----API CALLS
import { getPortfolio, getTickerInfo, addStocktoPortfolio, getUser, addToTransactions } from '../../services/apiCalls';

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null,
            email: '',
            data: [],
            full_name: '',
            search_ticker: '',
            tickerInfo: [],
            quantity: 0
        };
    }

    componentDidMount() {
        
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                getUser(user.email)
                    .then(res => {
                        this.setState({
                            user_id: res.data.data.id,
                            full_name: res.data.data.full_name,
                            email: res.data.data.email,
                            balance: res.data.data.balance
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })

                getPortfolio(user.email)
                    .then( res => {
                        this.setState({
                            data: res.data.data,
                        })
                    })
                    .catch( error => {
                        console.log(error)
                    })
            } else {
                this.setState({
                    user: null
                })
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleLogOut = (e) => {
        e.preventDefault();

        firebase.auth().signOut();

        this.props.history.push('/');
    }

    handleOnChange = (e) => {
        e.preventDefault();

        this.setState({ [e.target.name]: e.target.value });
    }

    handleSearch = (e) => {
        e.preventDefault();

        const {search_ticker} = this.state;

        if(search_ticker !== ''){
            getTickerInfo(search_ticker)
                .then(res => {
                    this.setState({
                        tickerInfo: res.data.data
                    })
                })
                .then(() => {
                    this.parseTickerInfo()
                })
                .catch( error => {
                    console.log(error)
                })
        }
    }

    parseTickerInfo = () => {
        const { tickerInfo, search_ticker } = this.state
        let upperCased = search_ticker.toUpperCase()
       
        let parsedData = tickerInfo[upperCased].quote
        console.log('test',parsedData)

        let realTimePrice = parsedData.iexRealtimePrice
        let latestPrice = parsedData.latestPrice
        let companyName = parsedData.companyName
        

        this.setState({
            realTimePrice, latestPrice, companyName
        })
    }

    handleBuy = (e) => {
        e.preventDefault();

        let { companyName, search_ticker, realTimePrice, latestPrice, quantity, user_id, balance } = this.state
        
        let currentValue = realTimePrice ? realTimePrice : latestPrice

        this.checkBalance(balance, currentValue, quantity)

        addStocktoPortfolio(companyName, search_ticker, currentValue, quantity, user_id )
            .then( res => {
                addToTransactions(companyName, search_ticker, currentValue, quantity, 'PURCHASED', user_id)
                    .then( res => {
                        console.log('tr',res)

                        getPortfolio(this.state.email)
                            .then(res => {
                                this.setState({
                                    data: res.data.data,
                                })
                            })
                            .catch(error => {
                                console.log(error)
                            })

                    })
                    .catch(error => {
                        console.log(error)
                    })

            })
            .catch( error => {
                console.log(error)
            })

        // add to db, re-render portfolio. 


    }

    checkBalance(balance, currentValue, quantity){
        let sumOfStock = currentValue * quantity
        let newBalance = balance - sumOfStock

        if(newBalance < 0){
            alert('There is not enough in your balance for this purchase')
            return;
        } else {
            //update user balance

            //getuser
        }
    }

    render(){
    
        return(
            <AuthContext.Consumer>
                {
                    (user) => {
                        if(user){
                            return(
                                <>
                                    <NavBar user={user} full_name={this.state.full_name} onClick={this.handleLogOut} ></NavBar>
                                    
                                    <div className='p-container'>
                                        <section>
                                            <h1 className='p-title'>Portfolio Balance: ${this.state.balance}</h1>

                                            <div className='p-data'><PortfolioInfo data={this.state.data} ></PortfolioInfo></div>
                                        </section>

                                        <section className='p-search'>
                                            <form className='search-form'>
                                                <input className='search-input' placeholder='Search By Ticker' autoComplete='off' onChange={this.handleOnChange} name='search_ticker' value={this.state.search_ticker}></input>
                                                <button className='search-button' onClick={this.handleSearch}>SEARCH TICKER</button>
                                                <div className='ticker-data'>
                                                    <span>{this.state.companyName}</span><br /> {this.state.realTimePrice ? <span>{this.state.realTimePrice}</span> : <span>{this.state.latestPrice}</span>}
                                                </div>
                                                <input className='quantity-input' type='number' min='1' placeholder='Quantity' onChange={this.handleOnChange} name='quantity'></input>
                                                <button className='search-button' onClick={this.handleBuy}>BUY</button>
                                            </form>
                                        </section>
                                    </div>
                                
                                </>
                            )
                         } else {
                            this.props.history.push('/')
                        }
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default PortfolioPage;