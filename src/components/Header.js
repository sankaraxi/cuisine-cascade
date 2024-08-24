import { useState } from 'react';
import logo from './logo.png';
const Header = () => {
    const [btnValue,setBtnValue] = useState('Login');

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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