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
                getTransaction('jdoe@email.com')
                    .then( res => {
                        console.log(res.data.data)

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

                                </>
                            )
                        }
                        // else {
                        //     this.props.history.push('/')
                        // }
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default TransactionPage;