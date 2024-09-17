import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ItemList from './ItemList';

const RestaurantCategory = ({data}) => {
console.log(data);
  return (
    <div>
        {/* Accordian Header */}
        <div className='flex justify-between items-center w-full h-16 bg-orange-100 shadow-lg my-3 px-8 rounded-md'>
                <span className='font-semibold font-poppins text-xl'>{data.title} ({data.itemCards.length})</span>
                <span><FontAwesomeIcon icon={faAngleDown} /></span> 
        </div>
        <ItemList items={data.itemCards} />


        {/* Accordian Body */}

        
    </div>
  )
}

export default RestaurantCategory;