import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

//not using keys(not acceptable) <<<<<< index as key <<<<<<<< unique id  (best practice) must follow
const Body = () => {
    return (
        <div className='body'>
            <div className='search-bar' >
                //search
            </div>
            <div className='restau-container'>
                {resList.map((restaurant) => (
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