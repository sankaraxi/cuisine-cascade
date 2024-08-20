import { CDN_URL } from "../utils/constants"; // name import

const styleCard ={
    backgroundColor: 'whitesmoke',
} //inline css

const RestaurantCard = (props) => {

    const {resData} = props;

    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return (
        <div className='res-card' style={styleCard}>
            <img className='res-logo' src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} mintues</h4>
        </div>
    );
};

export default RestaurantCard;