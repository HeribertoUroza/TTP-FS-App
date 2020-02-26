import React from 'react';
import firebase from '../../firebase/config';

// ----CONTEXT
import AuthContext from '../../context/AuthContext';

// ----COMPONENT
import NavBar from '../../components/NavBar';
import PortfolioInfo from '../../components/PortfolioInfo';

// ----API CALLS
import { getPortfolio } from '../../services/apiCalls';

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null,
            userEmail: '',
            data: [],
            full_name: ''
        };
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                getPortfolio('jdoe@email.com')
                    .then( res => {
                        console.log(res.data.data)
                    
                        this.setState({
                            user: user,
                            userEmail: user.email,
                            data: res.data.data,
                            full_name: res.data.data[0].full_name,
                            balance: res.data.data[0].balance,
                        })
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

    render(){
        console.log(this.state)
        return(
            <AuthContext.Consumer>
                {
                    (user) => {
                        if(user){
                            return(
                                <>
                                    <NavBar user={user} full_name={this.state.full_name} onClick={this.handleLogOut} ></NavBar>
                                    <section className='p-container'>
                                        <h1 className='p-title'>Portfolio Balance: ${this.state.balance}</h1>

                                        <div className='p-data'><PortfolioInfo data={this.state.data} ></PortfolioInfo></div>

                                        <section className='p-search'>
                                            <form>
                                                <input></input>
                                                <button>BUY</button>
                                            </form>
                                        </section>
                                    </section>
                                
                                </>
                            )
                         } 
                        //else {
                        //     this.props.history.push('/')
                        // }
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default PortfolioPage;