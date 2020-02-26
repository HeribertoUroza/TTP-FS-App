import React from 'react';
import firebase from '../../firebase/config';

// ----CONTEXT
import AuthContext from '../../context/AuthContext';

// ----COMPONENT
import NavBar from '../../components/NavBar';

// ----API CALLS
import { getTransaction } from '../../services/apiCalls';


class TransactionPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null,
        };
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                getTransaction(user.email)
                    .then( res => {

                        this.setState({
                            user: user,
                            userEmail: user.email,
                            full_name: res.data.data[0].full_name,
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

    render(){
        return(
            <AuthContext.Consumer>
                {
                    (user) => {
                        if(user) {
                            return (
                                <>
                                    <NavBar user={user} full_name={this.state.full_name} onClick={this.handleLogOut} path={this.props.history.location.pathname}></NavBar>

                                    <section className='tranContainer'>
                                        <h1 className='tranTitle' >Here Are All Of Your Transactions</h1>

                                        <h3 className='p-title-h3'><span className='title-s'>NAME</span><span className='title-s' >TICKER</span><span className='title-s' >QUANTITY</span><span className='title-s' >AMOUNT</span><span className='title-s' >STATUS</span></h3>
                                        <ul className='tranListContainer'>
                                            {
                                                this.state.data ? this.state.data.map(( e, i) => {
                                                    return <li className='tranListItem' key={i}><span className='info'>{e.name}</span><span className='info' >{e.ticker}</span><span className='info' >{e.quantity}</span><span className='info' >${e.amount}</span><span className='info'>{e.status}</span></li>
                                                }) : <h1 className='tranTitle'>No Transactions Yet</h1>
                                            }
                                        </ul>
                                    </section>

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

export default TransactionPage;