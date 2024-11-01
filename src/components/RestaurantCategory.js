import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import ItemList from './ItemList';
import { useState } from 'react';

const RestaurantCategory = ({data,showItem,setShowIndex}) => {

  const [showItems, setShowItems] = useState(false);
  const clickHandle = () => {
    // setShowIndex();
    setShowItems(!showItems);
  }

  return (
    <div className='max-sm:my-3'>
        {/* Accordian Header */}
        <div 
          className='flex justify-between items-center w-full h-9 sm:h-16 bg-orange-100 my-1 px-4 sm:my-3 sm:px-8 rounded-md cursor-pointer'
          onClick={clickHandle}
        >
                <span className='font-semibold font-poppins text-sm sm:text-xl'>{data.title} ({data.itemCards.length})</span>
                <span><FontAwesomeIcon icon={showItems ? faAngleUp : faAngleDown} /></span> 
        </div>
         
        {showItems && <div className='sm:mx-5'>
          <ItemList items={data.itemCards} />
        </div>}
        


        {/* Accordian Body */}
        
    </div>
  )
}

export default RestaurantCategory;