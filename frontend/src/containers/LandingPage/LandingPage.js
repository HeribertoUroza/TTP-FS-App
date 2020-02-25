import React from 'react';

// ----COMPONENT
import NavBar from '../../components/NavBar';

class LandingPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            //user: true,
            email: '',
            password: '',
        }
    }

    handleLogin = (e) => {
        e.preventDefault();
        //add firebase auth
        this.props.history.push('/portfolio')
    }

    handleOnChange = (e) => {
        e.preventDefault();

        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        console.log(this.props)
        return(
            <>
                <NavBar user={this.state.user} onClick={this.handleLogin} onChange={this.handleOnChange} ></NavBar>
                <div className='lp-container'>
                    <section className='lp-welcome'>
                        <h1 className='lp-title'>Sign Up Now To Gain Access To The Financial Data You Want!</h1>
                        <br />
                        <h1 className='lp-offer' >Limited Time Offer!</h1>
                        <h1 className='lp-body' >If You Sign Up Now, We Will Add $5000 To Your Portfolio So You Can Get Started!</h1>

                    </section>

                    <section className='lp-register'>
                        
                    </section>
                </div>
            </>
        )
    }
}

export default LandingPage;