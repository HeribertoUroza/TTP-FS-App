import React from 'react';

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
        <ul>
            <li>Transactions</li>
            <li>Portfolio</li>
        </ul>
    </nav>

    return(
        notUser
    )
}

export default NavBar;