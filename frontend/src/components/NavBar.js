import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    console.log(props)

    const notUser = <nav>
        <h1 className='nav-title'>TTP-FS-App</h1>
        <form className='register' >
            <h3>Coming Back? Sign back here!</h3>
            <input className='r-email' type='email' placeholder='email' autoComplete='on' ></input>
            <input className='r-password' type='password' placeholder='password' autoComplete='on' ></input>
            <button className='login'>Login</button>
        </form>
    </nav>


    const user = <nav>
        <ul className='links'>
            <li><Link to='/transactions'>Transactions</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
        </ul>
    </nav>

    return(
        props.user ? user : notUser
    )
}

export default NavBar;