import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import {useState, useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCircleStop } from '@fortawesome/free-regular-svg-icons';
import { CDN_URL } from "../utils/constants";
// import { useState, useEffect } from 'react';
// import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);
    const [showIndex, setShowIndex] = useState(0);
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top
      }, []);

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

    const categories2 = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (cardC) => cardC.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categories2);   

    return(
        <div className="pt-[80px] mx-4 my-6 sm:mx-56  sm:my-9">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-center font-palanquin font-bold text-3xl sm:text-4xl">{name}</h1>
                <div className="flex justify-center items-center mt-1 text-md sm:text-xl">
                    <div className="mr-2">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <p className="font-palanquin font-semibold ">{areaName}</p>
                </div>
            </div>
            

            <div className="flex justify-between items-center">
                <h2 className="font-palanquin text-lg sm:text-xl  font-semibold">{cuisines.join(', ')}</h2> 
                <p className="font-montserrat text-lg sm:text-xl">{costForTwoMessage}</p>
            </div>
            

            <div className="bg-transparent shadow-lg sm:my-3 sm:p-5 rounded-md">
                {
                    categories2.map((mainCategory , index) => (

                        <RestaurantCategory  // controlled component
                            key={mainCategory.card.card.title} 
                            data={mainCategory.card.card}
                            showItems={index === showIndex ? true : false}
                            setShowIndex = {()=> setShowIndex(index)}
                        />
                    ))
                }
            </div>
           
            {
                categories.map((mainCategory) => (
                    <div key={mainCategory.card.card.title} className="bg-transparent shadow-lg my-4 p-3 sm:my-10 sm:p-5 rounded-md">
                        <h4 className="font-palanquin font-bold text-xl sm:text-3xl">{mainCategory.card.card.title}</h4>
                        {
                            mainCategory.card.card.categories.map((subCategory) => (
                            <RestaurantCategory key={subCategory.title} data={subCategory}/>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default RestaurantMenu;