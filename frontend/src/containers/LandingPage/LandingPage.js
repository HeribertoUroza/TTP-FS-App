import React from 'react';

// ----COMPONENT
import NavBar from '../../components/NavBar';

class LandingPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            //user: true,
        }
    }

    handleLogin(){
        this.props.history.push('/portfolio')
    }

    render(){
        
        return(
            <>
                <NavBar user={this.state.user} onClick={this.handleLogin}></NavBar>
            </>
        )
    }
}

export default LandingPage;