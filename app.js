import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.png';

/** Basic Plan
 * Header 
 *  - Logo
 *  - Navigation items
 * Body
 *  - Search bar
 *  - Restaurant container
 *      - Restaurant list / cards
 *          - Restaurant image
 *          - Name of the restaurant, Star rating , cuisine, delivery time
 * Footer
 *  - Social media links
 *  - copy right
 *  - contact us
 *  - address
 */

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const styleCard ={
    backgroundColor: 'f0f0f0',
} //inline css

const RestaurantCard = (props) => {

    const {resData} = props;
    return (
        <div className='res-card' style={styleCard}>
            <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} alt="res-logo" />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(',')}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.sla.deliveryTime} mintues</h4>
        </div>
    );
};


const resObj ={
    "info": {
    "id": "51012",
    "name": "KFC",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1b92e544-fce7-45ac-941a-50092e3037a5_51012.JPG",
    "locality": "Ganapathy",
    "areaName": "Ganapathy",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Fast Food",
      "Rolls & Wraps"
    ],
    "avgRating": 3.8,
    "parentId": "547",
    "avgRatingString": "3.8",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 35,
      "lastMileTravel": 4.4,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "4.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-20 23:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Burger.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Burger.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
        "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "4.0",
        "ratingCount": "500+"
      },
      "source": "GOOGLE",
      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-ganapathy-coimbatore-51012",
    "type": "WEBLINK"
  }
    }

const Body = () => {
    return (
        <div className='body'>
            <div className='search-bar' >
                //search
            </div>
            <div className='restau-container'>
                <RestaurantCard resData={resObj} />
            </div>
        </div>
    );
};


const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);