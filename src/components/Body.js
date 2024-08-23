import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";



//not using keys(not acceptable) <<<<<< index as key <<<<<<<< unique id  (best practice) must follow
const Body = () => {

    // state variable is created using useState - super powerful variable 
    // it maintains the state of your application
    // a react hook is normal javascript function that starts with use
    // javascript utility function given by react
    // two important react hooks - useState, useEffect

    const [listOfRestaurants, setListOfRestaurants] = useState(resList); // local state variable 

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
    
    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
                    const filteredRestaurants = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.3);
                    setListOfRestaurants(filteredRestaurants);
                }}>Top Rated Restaurants</button>
                
            </div>
            <div className='restau-container'>
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key ={restaurant.info.id} resData={restaurant} />
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
        </div>
    );
};



export default Body;