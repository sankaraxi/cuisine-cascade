import { useState, useContext } from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBurger } from '@fortawesome/free-solid-svg-icons'; 
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Header = () => {
    const [btnValue, setBtnValue] = useState('Login');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

   
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className='fixed flex justify-between top-0 left-0 bg-red-100 w-full px-7 sm:px-14 py-2 z-20 shadow-md'>
            <div>
                <Link to="/">
                    <img className='w-[150px] sm:w-[185px]' src={logo} alt='logo' />
                </Link>
            </div>

            <div className='flex items-center'>
                <div className='flex items-center space-x-3 text-xl sm:hidden'>
                    <Link to='/cart'>
                        <h1 className='font-semibold sm:font-bold w-11 text-center'>
                            <span><FontAwesomeIcon icon={faCartShopping} /></span> {cartItems.length}
                        </h1>
                    </Link>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <FontAwesomeIcon icon={faBurger} />
                    </button>
                </div>
            </div>

           
            <div
                className={`fixed top-0 right-0 w-3/4 h-full bg-red-100 z-30 transform transition-transform duration-300 ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } sm:hidden`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-2">
                    
                        <button className='absolute top-0 right-0 p-2' onClick={() =>{
                         setIsMenuOpen(false);
                    }}><FontAwesomeIcon icon={faXmark} className='w-10 h-10' /></button>
                    
                    <Link className="p-4 font-bold" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link className="p-4 font-bold" to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link className="p-4 font-bold" to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    <Link className="p-4 font-bold" to="/grocery" onClick={() => setIsMenuOpen(false)}>CascadeMart</Link>
                    <Link className="p-4 font-bold" to="/cart" onClick={() => setIsMenuOpen(false)}>Cart ({cartItems.length})</Link>
                    <button
                        className='login-btn border border-transparent bg-green-300 rounded-md px-2 mx-2 w-20 flex-shrink-0'
                        onClick={() => {
                            setBtnValue(btnValue === 'Login' ? 'Logout' : 'Login');
                        }}
                    >
                        {btnValue}
                    </button>
                    <div className='px-2  border border-solid border-black rounded-full cursor-pointer hover:bg-black hover:text-white'>
                        <span className='px-1'><FontAwesomeIcon icon={faUser} /></span>
                        <span className='px-1 font-bold'>{loggedInUser}</span>
                    </div>
                </div>
            </div>

            <ul className='max-sm:hidden flex p-4 m-4 font-poppins font-[500]'>
                <li className='px-4'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='px-4'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='px-4'>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li className='px-4'>
                    <Link to='/grocery'>CascadeMart</Link>
                </li>
                <li className='px-4'>
                    <Link to='/cart'>
                        <h1 className='font-bold w-11 text-center'>
                            <span><FontAwesomeIcon icon={faCartShopping} /></span> {cartItems.length}
                        </h1>
                    </Link>
                </li>
                <button
                    className='login-btn border border-transparent bg-green-300 rounded-md px-2 mx-2 w-20 flex-shrink-0'
                    onClick={() => {
                        btnValue === 'Login' ? setBtnValue('Logout') : setBtnValue('Login');
                    }}
                >
                    {btnValue}
                </button>
                <div className='px-2 border border-solid border-black rounded-full cursor-pointer hover:bg-black hover:text-white'>
                    <span className='px-1'><FontAwesomeIcon icon={faUser} /></span>
                    <span className='px-1'>{loggedInUser}</span>
                </div>
            </ul>
        </div>
    );
};

export default Header;
