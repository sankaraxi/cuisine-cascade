import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCircleStop } from '@fortawesome/free-regular-svg-icons';
import { CDN_URL } from "../utils/constants";
// import { useState, useEffect } from 'react';
// import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);

    const {resID} = useParams();
    console.log(resID);

    const resInfo = useRestaurantMenu(resID);

    // these lines are moved to useRestaurantMenu.js
    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resID);
    //     const menu = await data.json();

    //     setResInfo(menu);
    // }
    
    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, areaName, costForTwoMessage
    } = resInfo?.data?.cards?.[2]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
    console.log(itemCards); 

    const categories = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (cardC) => cardC.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

    console.log(categories);

    return(
        <div className="mx-56  my-7">
            <h1 className="text-center font-palanquin font-bold text-4xl">{name}</h1>
            <div className="flex justify-center items-center mt-1">
                <div className="mr-2">
                    <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <p className="font-palanquin font-semibold">{areaName}</p>
            </div>


            <div className="flex justify-between items-center">
                <h2 className="font-palanquin text-xl font-semibold">{cuisines.join(', ')}</h2> 
                <p className="font-montserrat text-md">{costForTwoMessage}</p>
            </div>
           
            {
                categories.map((mainCategory) => (
                    <div key={mainCategory.card.card.title} className="bg-transparent shadow-lg my-10 p-5 rounded-md">
                        <h4 className="font-palanquin font-bold text-3xl">{mainCategory.card.card.title}</h4>
                        {
                            mainCategory.card.card.categories.map((subCategory) => (
                            <RestaurantCategory key={mainCategory.id} data={subCategory}/>
                            ))
                        }
                    </div>
                ))
            }

            <ul>
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[19].card.info.name}</li> */}
                {itemCards.map((item) => (
                    <li 
                        className="bg-slate-100 rounded-lg p-3 my-3 hover:bg-slate-200 cursor-pointer" 
                        key ={item.card.info.id}>

                        <div className="flex relative p-2">
                            <img className="w-56 h-56 object-cover object-center rounded-lg"
                                src={CDN_URL + item.card.info.imageId}
                                alt="food-item"
                            /> 

                            <div className="flex flex-col m-4 p-4 justify-center">
                                <h2 className="text-3xl font-poppins font-semibold">{item.card.info.name}</h2>
                                <h4 className="text-lg font-palanquin ">{'\u20B9'} {item.card.info.price / 100}</h4>
                            </div>

                            <div className="">
                                <h4 
                                    className={`absolute right-0 top-0 ${item.card.info.itemAttribute.vegClassifier === "VEG" ? "text-green-600" : "text-red-700"}`}>
                                        
                                    <FontAwesomeIcon icon={faCircleStop} />
                                </h4>
                            </div>
                            
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;