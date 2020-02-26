import React from 'react';
import firebase from '../../firebase/config';

// ----CONTEXT
import AuthContext from '../../context/AuthContext';

// ----COMPONENT
import NavBar from '../../components/NavBar';


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
                this.setState({
                    user: user,
                    userEmail: user.email,
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
    console.log(this.props.history.location.pathname)
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
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default TransactionPage;