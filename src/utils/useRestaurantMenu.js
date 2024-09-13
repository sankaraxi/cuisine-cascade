import { useState, useEffect } from 'react';
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resID) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();    
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resID);
        const menu = await data.json();

        setResInfo(menu);
    };
    return resInfo;
};

export default useRestaurantMenu;