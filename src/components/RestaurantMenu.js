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
            

            <div className="bg-transparent shadow-lg my-3 p-5 rounded-md">
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
                    <div key={mainCategory.card.card.title} className="bg-transparent shadow-lg my-10 p-5 rounded-md">
                        <h4 className="font-palanquin font-bold text-3xl">{mainCategory.card.card.title}</h4>
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