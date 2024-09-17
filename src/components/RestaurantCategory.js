import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import ItemList from './ItemList';
import { useState } from 'react';

const RestaurantCategory = ({data}) => {

  const [showItems, setShowItems] = useState(false);
  const clickHandle = () => {
    setShowItems(!showItems);
  }

  return (
    <div>
        {/* Accordian Header */}
        <div 
          className='flex justify-between items-center w-full h-16 bg-orange-100 shadow-lg my-3 px-8 rounded-md cursor-pointer'
          onClick={clickHandle}
        >
                <span className='font-semibold font-poppins text-xl'>{data.title} ({data.itemCards.length})</span>
                <span><FontAwesomeIcon icon={showItems ? faAngleUp : faAngleDown} /></span> 
        </div>
         
        {showItems && <div className='mx-5'>
          <ItemList items={data.itemCards} />
        </div>}
        


        {/* Accordian Body */}
        
    </div>
  )
}

export default RestaurantCategory;