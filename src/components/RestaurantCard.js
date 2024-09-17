import { CDN_URL } from "../utils/constants"; // name import

const styleCard ={
    backgroundColor: 'whitesmoke',
} //inline css

const RestaurantCard = (props) => {

    const {resData} = props;

    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return (
        <div className='res-card m-4 p-4 w-[300px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200 relative '>
            <img 
                className='res-logo w-full h-[150px] object-cover object-center rounded-lg' 
                src={CDN_URL + cloudinaryImageId} 
                alt="res-logo" 
            />

            <div className="mt-2">
                <h3 className="font-bold font-poppins py-2 text-lg">{name}</h3>
                <h4 className="font-palanquin py-1">{cuisines.slice(0, 5).join(', ')}</h4>
                <h4 className="font-palanquin py-1 font-semibold">{costForTwo}</h4>
                <h4 className="font-palanquin py-1"><span className="font-bold">{avgRating}</span> stars</h4>
                <div className="absolute right-5 bottom-5">
                    <h4 className="font-palanquin"><span className="font-bold">{deliveryTime}</span> mintues</h4>
                </div>
            </div>
            
        </div>
    );
};


// Higher Order Component

//input - RestaurantCard => output - RestaurantCardPromoted 

export const withPromotedLabel = (RestaurantCard) =>{
    return (props) => {
        return (
            <div className="relative">
                <label className="absolute z-10 top-2 left-0 bg-black text-white px-2 py-[2px] m-2 rounded-lg text-sm font-montserrat font-bold">
                    PROMOTED
                </label>
                <RestaurantCard {...props} />
            </div>

        );
    };
};

export default RestaurantCard;