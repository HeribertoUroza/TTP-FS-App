import React from 'react';

// ----COMPONENT
import NavBar from '../../components/NavBar';

class LandingPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user: null,
        }
    }

    render(){
        return(
            <>
                <NavBar user={this.state.user}></NavBar>
            </>
        )
    }
}

export default LandingPage;