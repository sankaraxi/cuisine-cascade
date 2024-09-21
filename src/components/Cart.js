import { useSelector } from "react-redux"
import ItemList from "./ItemList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux"
import { clearCart } from "../utils/slices/cartSlice"


const Cart = () => {


    //subscribe to the store
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="mx-56  my-7">
            <div className="m-[2px] p-[2px]">
                <h1 className="text-4xl font-poppins font-bold text-center">My Cart</h1>
            </div>
            <div className="my-1 flex justify-between">
                <h4 className="font-palanquin"><span className="font-bold">{cartItems.length}</span> Items</h4>
                <button className="border border-solid text-white font-bold bg-black p-1 rounded-lg"
                        onClick={handleClearCart}>
                    <h4>Empty <span><FontAwesomeIcon icon={faCartShopping} /></span></h4>
                </button>
            </div>
            <div>
                {cartItems.length === 0 && <h1 className="text-md font-poppins text-center">Cart is Empty. Please add items.</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart; 