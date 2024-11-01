import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
// import resList from "../utils/mockData"; // not using this anymore
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from '../utils/UserContext';


//not using keys(not acceptable) <<<<<< index as key <<<<<<<< unique id  (best practice) must follow
const Body = () => {

    // state variable is created using useState - super powerful variable 
    // it maintains the state of your application
    // a react hook is normal javascript function that starts with use
    // javascript utility function given by react
    // two important react hooks - useState, useEffect

    const [listOfRestaurants, setListOfRestaurants] = useState([]); // local state variable for list of restaurants
    const [filteredListOfRestaurants, setFileteredListOfRestaurants] = useState([]); // local state variable for filtered list of restaurants
    const [searchText, setSearchText] = useState(''); // local state variable for search text
    const {loggedInUser , setUserInfo} = useContext(UserContext); // context variable

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); // higher order component

    console.log("Body rendered",listOfRestaurants); // whenever a state variable changes, the component re-renders 

//     const [listOfRestaurants, setListOfRestaurants] = useState([
//         {
//         "info": {
//           "id": "587665",
//           "name": "Subway",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/518837c9-252e-47e6-90d3-055f0ea2c79d_587665.JPG",
//           "costForTwo": "₹350 for two",
//           "cuisines": [
//             "Salads",
//             "Snacks",
//             "Desserts",
//             "Beverages"
//           ],
//           "avgRating": 3.7,
//           "sla": {
//             "deliveryTime": 20,
//           },
          
//         }
//         },
//         {
//     "info": {
//       "id": "587666",
//       "name": "My shop",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/518837c9-252e-47e6-90d3-055f0ea2c79d_587665.JPG",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Salads",
//         "Snacks",
//         "Desserts",
//         "Beverages"
//       ],
//       "avgRating": 4.7,
//       "sla": {
//         "deliveryTime": 20,
//       },
      
//     }
//         }, 
//         {
// "info": {
//   "id": "587667",
//   "name": "McDonalds",
//   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/518837c9-252e-47e6-90d3-055f0ea2c79d_587665.JPG",
//   "costForTwo": "₹350 for two",
//   "cuisines": [
//     "Salads",
//     "Snacks",
//     "Desserts",
//     "Beverages"
//   ],
//   "avgRating": 4.2,
//   "sla": {
//     "deliveryTime": 20,
//   },
  
// }
//         }
//     ]);

    // normal js variable
//     let listOfRestaurantsJS = [
//         {
//             "info": {
//               "id": "587665",
//               "name": "Subway",
//               "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/518837c9-252e-47e6-90d3-055f0ea2c79d_587665.JPG",
//               "costForTwo": "₹350 for two",
//               "cuisines": [
//                 "Salads",
//                 "Snacks",
//                 "Desserts",
//                 "Beverages"
//               ],
//               "avgRating": 3.7,
//               "sla": {
//                 "deliveryTime": 20,
//               },
              
//             }
//     },
//     {
//         "info": {
//           "id": "587666",
//           "name": "My shop",
//           "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/518837c9-252e-47e6-90d3-055f0ea2c79d_587665.JPG",
//           "costForTwo": "₹350 for two",
//           "cuisines": [
//             "Salads",
//             "Snacks",
//             "Desserts",
//             "Beverages"
//           ],
//           "avgRating": 4.7,
//           "sla": {
//             "deliveryTime": 20,
//           },
          
//         }
// }, 
// {
//     "info": {
//       "id": "587667",
//       "name": "McDonalds",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/518837c9-252e-47e6-90d3-055f0ea2c79d_587665.JPG",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Salads",
//         "Snacks",
//         "Desserts",
//         "Beverages"
//       ],
//       "avgRating": 4.2,
//       "sla": {
//         "deliveryTime": 20,
//       },
      
//     }
// }]

// useEffect(() => {}, []); // empty array means it will run only once when the component is mounted 

// if no dependency array is given, useeffect will run everytime the component is rendered
// if empty dependency array is given, useeffect will run only once when the component is mounted

    useEffect(() => {
        fetchData();    
    },[]); 


    const fetchData = async () => {
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.084887052121998&lng=76.99808970093727&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=11.084887052121998&lng=76.99808970093727&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        //optional chaining operator
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFileteredListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return <h1 className="offline">You are offline!!! Please check your connection!</h1>;
    }


// conditional rendering

    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />;
    // }
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='pt-[80px]'>

            <div className='filter flex max-sm:flex-col items-center justify-center m-2 p-2 mx-5'>
                <div className="flex justify-center mt-2 pt-2 sm:m-4 sm:p-4 max-sm:w-full font-palanquin font-semibold">  
                    <input 
                        type="text" 
                        className="border px-2 max-sm:py-1 border-solid border-gray-300 rounded-md max-sm:w-5/6" 
                        placeholder="Search for restaurants" value={searchText} onChange={(event)=>{
                        setSearchText(event.target.value);
                    }}/>
                    <button className="bg-orange-300 px-4 rounded-md mx-2 ring-2 max-sm:w-1/4" onClick={() => {
                        console.log(searchText);

                        const filteredRestaurants = listOfRestaurants.filter((restaurant) => 
                            (restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        );

                        setFileteredListOfRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>

                <div className=" flex justify-center mt-1 pt-2 sm:my-4 sm:py-4 max-sm:w-full">
                    <button className="filter-btn bg-yellow-100 ring-2 px-4 rounded-md sm:mx-2 font-palanquin font-semibold" 
                            onClick={() => {
                                const filteredRestaurants = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.3);
                                setFileteredListOfRestaurants(filteredRestaurants);
                    }}>Top Rated Restaurants</button>

                </div>   
            </div>
                

            
            <div>
                <h1 className="text-2xl sm:text-4xl  font-poppins font-bold text-center">Nearby Food Joints</h1>
            </div>

            <div className='restau-container flex flex-wrap justify-center sm:justify-between sm:mx-20 sm:my-2'>

                {filteredListOfRestaurants.length === 0 ?<h4 className="no-restaus">No Restaurants found</h4> : filteredListOfRestaurants.map((restaurant) => (
                    <Link to={'/restaurants/'+restaurant.info.id}>
                        {
                            restaurant.info.avgRating < 4.2  ? <RestaurantCardPromoted key ={restaurant.info.id} resData={restaurant} /> : <RestaurantCard key ={restaurant.info.id} resData={restaurant} />
                        }
                    </Link>
                  ))} 
                
                {/* this not a good apporach  */}
                {/* <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[1]} />
                <RestaurantCard resData={resList[2]} />
                <RestaurantCard resData={resList[3]} />
                <RestaurantCard resData={resList[4]} />
                <RestaurantCard resData={resList[5]} />
                <RestaurantCard resData={resList[6]} />
                <RestaurantCard resData={resList[7]} />
                <RestaurantCard resData={resList[8]} />
                <RestaurantCard resData={resList[9]} />
                <RestaurantCard resData={resList[10]} />
                <RestaurantCard resData={resList[11]} />
                <RestaurantCard resData={resList[12]} />
                <RestaurantCard resData={resList[13]} /> 
                <RestaurantCard resData={resList[19]} /> */}
            </div>

            <div className='filter flex items-center justify-center bg-gray-100'>
                <div className="m-4 p-4">  
                    <input 
                        type="text" 
                        className="border border-solid border-gray-300 rounded-md"
                        value={loggedInUser} 
                        onChange={(event)=> setUserInfo(event.target.value)}/>
                </div>
            </div>
            
            
            
        </div>
    );
};



export default Body;