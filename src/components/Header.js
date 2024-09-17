import { useState } from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
    const [btnValue,setBtnValue] = useState('Login');

    const onlineStatus = useOnlineStatus();

    return (
        <div className='flex justify-between bg-blue-50 shadow-lg px-14 py-2'>
            <div className='logo-container'>
                <img className='w-[185px]' src={logo} alt='logo' />
            </div>
            <div className='flex items-center'>
                <ul className='flex p-4 m-4 font-poppins font-[500]' >
                    {/* <li>
                        Online Status : {onlineStatus ? '🌝' : '🌑'}
                    </li> */}
                    <li className='px-4'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='px-4'>
                        {/* <a href='/about'>About</a> this will reload the page */}
                        <Link to='/about'>About</Link> {/* this will not reload the page */}
                    </li>
                    <li className='px-4'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className='px-4'>
                        <Link to='/grocery'>CascadeMart</Link>
                    </li>
                    <li className='px-4'>Cart</li>
                    <button className='login-btn border border-transparent bg-green-300 rounded-md px-2 mx-2 w-20 flex-shrink-0' onClick={()=>{
                        btnValue === "Login" ? setBtnValue('Logout') : setBtnValue('Login'); // ternary operator
                    }}>{btnValue}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;