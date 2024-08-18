import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';

/** Basic Plan
 * Header 
 *  - Logo
 *  - Navigation items
 * Body
 *  - Search bar
 *  - Restaurant container
 *      - Restaurant list / cards
 *          - Restaurant image
 *          - Name of the restaurant, Star rating , cuisine, delivery time
 * Footer
 *  - Social media links
 *  - copy right
 *  - contact us
 *  - address
 */

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

const styleCard ={
    backgroundColor: 'f0f0f0',
} //inline css

const RestaurantCard = () => {
    return (
        <div className='res-card' style={styleCard}>
            <img className='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofpoexdjkfy44d4adccy" alt="res-logo" />
            <h3>GreenLeaf Restaurant</h3>
            <h4>Biriyani, North Indian, Chinese</h4>
            <h4>4.6 stars</h4>
            <h4>38 mintues</h4>
        </div>
    );
};



const Body = () => {
    return (
        <div className='body'>
            <div className='search-bar' >
                //search
            </div>
            <div className='restau-container'>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
};


const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);