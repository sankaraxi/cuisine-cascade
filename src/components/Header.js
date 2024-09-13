import { useState } from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
    const [btnValue,setBtnValue] = useState('Login');

    const onlineStatus = useOnlineStatus();

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    {/* <li>
                        Online Status : {onlineStatus ? '🌝' : '🌑'}
                    </li> */}
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        {/* <a href='/about'>About</a> this will reload the page */}
                        <Link to='/about'>About</Link> {/* this will not reload the page */}
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/grocery'>CascadeMart</Link>
                    </li>
                    <li>Cart</li>
                    <button className='login-btn' onClick={()=>{
                        btnValue === "Login" ? setBtnValue('Logout') : setBtnValue('Login'); // ternary operator
                    }}>{btnValue}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;