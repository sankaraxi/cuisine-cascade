import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

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