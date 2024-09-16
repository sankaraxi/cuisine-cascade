import { CDN_URL } from "../utils/constants"; // name import

const styleCard ={
    backgroundColor: 'whitesmoke',
} //inline css

const RestaurantCard = (props) => {

    const {resData} = props;

    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return (
        <div className='res-card m-4 p-4 w-[300px] rounded-lg' style={styleCard}>
            <img 
                className='res-logo w-full h-[150px] object-cover object-center rounded-lg' 
                src={CDN_URL + cloudinaryImageId} 
                alt="res-logo" 
            />

            <div className="mt-2">
                <h3 className="font-bold font-poppins py-2 text-lg">{name}</h3>
                <h4 className="font-palanquin">{cuisines.join(', ')}</h4>  
                <h4 className="font-palanquin">{costForTwo}</h4>
                <h4 className="font-palanquin">{avgRating} stars</h4>
                <h4 className="font-palanquin">{deliveryTime} mintues</h4>
            </div>
            
        </div>
    );
};

export default RestaurantCard;