import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resID} = useParams();
    console.log(resID);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resID);
        const menu = await data.json();

        setResInfo(menu);
    }
    
    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, areaName, costForTwoMessage
    } = resInfo?.data?.cards?.[2]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
    console.log(itemCards);

    return(
        <div>
            <h1>{name}</h1>
            <p>{areaName}</p>
            <h2>{cuisines.join(', ')}</h2> 
            <p>{costForTwoMessage}</p>
            <ul>
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[19].card.info.name}</li> */}
                {itemCards.map((item) => (
                    <li key ={item.card.info.id}>{item.card.info.name} {"- "}   
                    {'\u20B9'} {item.card.info.price / 100} </li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;