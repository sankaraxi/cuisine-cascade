import React , {lazy, Suspense,useEffect,useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import {provider} from 'react-redux';
// import CascadeMart from './components/CascadeMart';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
import UserContext from './utils/UserContext';
import appStore from './utils/appStore';
import Cart from './components/Cart';
import Footer from './components/Footer';



//chunking
//lazy loading
//code splitting
//dynamic bundling
// on demand loading
 const CascadeMart = lazy(() => import('./components/CascadeMart'));

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
    const [userInfo, setUserInfo] = useState(null);
    // authenticaion code
    useEffect(() => {
        const data = {
            name: 'Sankar',
        };
 
        setUserInfo(data.name);
    }, []);

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
            <div className='app'>
                
                <Header />
                
                <Outlet />

                <Footer />
                
            </div>
        </UserContext.Provider>
        </Provider>
    );
};


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',

                element: (
                    <Suspense fallback = {<h1>loading....</h1>}>
                        <CascadeMart />
                    </Suspense>)
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/restaurants/:resID',
                element: <RestaurantMenu />
            },
            
        ], 
        errorElement: <Error />
    },
    
]);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);