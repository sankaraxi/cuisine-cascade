const styleCard ={
    backgroundColor: 'whitesmoke',
} //inline css

const RestaurantCard = (props) => {

    const {resData} = props;

    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return (
        <div className='res-card' style={styleCard}>
            <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} mintues</h4>
        </div>
    );
};

export default RestaurantCard;