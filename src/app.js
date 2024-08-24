import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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

const About = () => {
    return (
        <About />
    );
}

const Contact = () => {
    return (
        <Contact />
    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);