import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {

    const notUser = <nav className='nav-notuser'>
        <h1 className='nav-title'>TTP-FS-App</h1>
        <form className='login-section' >
            <h3 className='nav-subtitle'>{props.error ? props.error : `Coming Back? Login back here!`}</h3>
            <input className='l-email' type='email' placeholder='Email' autoComplete='on' name='nav_email' onChange={props.onChange} ></input>
            <input className='l-password' type='password' placeholder='Password' autoComplete='on' name='nav_password' onChange={props.onChange} ></input>
            <button className='login' onClick={props.onClick}>Login</button>
        </form>
    </nav>


    const user = <nav className='nav-user'>
        <h1 className='nav-title'>Hello, {props.full_name}</h1>
        <ul className='links'>
            {props.path === '/transaction' ? <Link to='/portfolio' className='link'><li>Go To Portfolio</li></Link> : <Link to='/transaction' className='link'><li>Go To Transactions</li></Link> }
            <button className='link' onClick={props.onClick} >Logout</button>
        </ul>
    </nav>

    return(
        props.user ? user : notUser
    )
}

export default NavBar;