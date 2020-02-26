import React from 'react';
import firebase from '../../firebase/config';

// ----API CALLS
import { createUser } from '../../services/apiCalls';

// ----COMPONENT
import NavBar from '../../components/NavBar';

class LandingPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user: null,
            email: '',
            password: '',
            fullname: '',
            error: '',
            loginError: null,
            nav_email: '',
            nav_password: ''
        }
    }

    handleLogin = (e) => {
        e.preventDefault();
        
        const { nav_email, nav_password } = this.state;
        
        firebase.auth().signInWithEmailAndPassword(nav_email, nav_password)
            .then(() => {
                this.props.history.push('/portfolio');
            })
            .catch(error => {
                this.setState({ loginError: error.message });
            })
    }

    handleOnChange = (e) => {
        e.preventDefault();

        this.setState({ [e.target.name]: e.target.value });
    }

    handleSignUp = (e) => {
        e.preventDefault();

        const { fullname, email, password } = this.state;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( res => {
                createUser(fullname, email)
                    .then( res => {
                        this.props.history.push('/portfolio');
                    })
            })
            .catch( error => {
                this.setState({
                    email: '',
                    password: '',
                    error: error.message
                })
            })
    }

    render(){
        const { user, error, loginError } = this.state;

        return(
            <>
                <NavBar user={user} onClick={this.handleLogin} onChange={this.handleOnChange} error={loginError}></NavBar>
                <div className='lp-container'>
                    <section className='lp-welcome'>
                        <h1 className='lp-title'>Sign Up Now To Gain Access To The Financial Data You Want!</h1>
                        <br />
                        <h1 className='lp-offer' >Limited Time Offer!</h1>
                        <h1 className='lp-body' >Recieve $5000 When You Sign Up!</h1>

                    </section>

                    <section className='lp-register'>
                        <form className='register'>
                            <input className='r-input r-fullname' name='fullname' placeholder='Enter Your Full Name' autoComplete='on' onChange={this.handleOnChange} type='name' value={this.state.fullname} ></input>
                            <input className='r-input r-email' name='email' placeholder='Enter Your Email' autoComplete='on' onChange={this.handleOnChange} type='email' value={this.state.email }></input>
                            <input className='r-input r-password' name='password' placeholder='Create Your Password' autoComplete='on' onChange={this.handleOnChange} type='password' value={this.state.password} ></input>
                            <span className='r-input error-message'>{error ? error : ''}</span>
                            <button className='r-input r-signup' onClick={this.handleSignUp }>Sign Up</button>
                        </form>
                    </section>
                </div>
            </>
        )
    }
}

export default LandingPage;