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
            </>
        )
    }
}

export default LandingPage;