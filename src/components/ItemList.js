import { CDN_URL } from '../utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleStop } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ItemList = ({items}) => {
    
  return (
    <div>

        {items.map((item) => (
            <div
                className="bg-slate-100 rounded-lg p-3 my-3 hover:bg-slate-200 cursor-pointer" 
                key={item.card.info.id}
            >
                <div className="flex relative p-2"> 
                    <img className="w-3/12 h-56 object-cover object-center rounded-lg"
                        src={CDN_URL + item.card.info.imageId}
                        alt="food-item"
                    />
                     

                    <div className="w-9/12 flex flex-col m-4 p-4 justify-center">
                        <h2 className="text-3xl font-poppins font-semibold">{item.card.info.name}</h2>
                        <h4 className="text-lg font-palanquin ">{'\u20B9'} {item.card.info.price ?  item.card.info.price / 100 : item.card.info.defaultPrice /100}</h4>
                        <p className='font-poppins text-md pt-7'>
                            {item.card.info.description}
                        </p>
                    </div>

                    <div className="" key={item.card.info.id}>
                        <h4 
                            className={`absolute right-0 top-0 ${item.card.info.itemAttribute.vegClassifier === "VEG" ? "text-green-600" : "text-red-700"}`}>
                                
                            <FontAwesomeIcon  icon={faCircleStop} />
                        </h4>
                    </div>

                    <div className="" key={item.card.info.id}>
                        <h4 
                            className={` text-lg absolute left-0 bottom-0 text-white bg-black rounded-full w-7 h-7 text-center`}>
                                
                            <FontAwesomeIcon icon={faPlus} />
                        </h4>
                    </div>
                            
                </div>
            </div>
        ))}


    </div>
  )
}

export default ItemList