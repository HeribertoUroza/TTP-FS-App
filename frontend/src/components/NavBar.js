import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    console.log(props)

    const notUser = <nav className='nav-notuser'>
        <h1 className='nav-title'>TTP-FS-App</h1>
        <form className='register' >
            <h3>Coming Back? Sign back here!</h3>
            <input className='r-email' type='email' placeholder='email' autoComplete='on' ></input>
            <input className='r-password' type='password' placeholder='password' autoComplete='on' ></input>
            <button className='login'>Login</button>
        </form>
    </nav>


    const user = <nav className='nav-user'>
        <h1 className='nav-title'>Hello</h1>
        <ul className='links'>
            <li><Link to='/transaction' className='link'>Transactions</Link></li>
            <li><Link to='/portfolio' className='link'>Portfolio</Link></li>
        </ul>
    </nav>

    return(
        props.user ? user : notUser
    )
}

export default NavBar;