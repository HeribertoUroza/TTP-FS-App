import React from 'react';
import firebase from '../../firebase/config';

// ----CONTEXT
import AuthContext from '../../context/AuthContext';

// ----COMPONENT
import NavBar from '../../components/NavBar';

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
                getPortfolio('jsmith@email.com')
                    .then( res => {
                        console.log(res.data.data)
                    
                        this.setState({
                            user: user,
                            userEmail: user.email,
                            data: res.data.data,
                            full_name: res.data.data[0].full_name
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