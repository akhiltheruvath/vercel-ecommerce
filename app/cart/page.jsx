"use client"
import { useSelector, useDispatch } from 'react-redux';
import styles from "../styles/cart.module.css"
import { increaseQuantity, decrementQuantity, removeFromCart } from '../redux/actions'; 

export default function Cart() {
  
    const cartItems = useSelector(state => state.productReducer.cart);
    const dispatch = useDispatch();

    const subtotal = cartItems.reduce( (total, item) => total + item.price * item.quantity,0);

    const handleIncreaseQuantity = (id) => dispatch(increaseQuantity(id));
    const handleDecrementQuantity = (id) => dispatch(decrementQuantity(id));
    const handleRemove = (id) => dispatch(removeFromCart(id));

    if (cartItems.length === 0) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Your Cart is Empty</h1>
                <p>Go back to the product list to add items.</p>
            </div>
        );
    }

    return (
        <div className={styles.cartContainer}>

            <h1 className={styles.heading}>Shopping Cart</h1>

            <div className={styles.itemList}>

                {cartItems.map((item, idx) => (

                    <div key={`${item.id}-${idx}`} className={styles.cartItem}>
                        
                        <img src={item.thumbnail}  width="100px" />

                        <h2 className={styles.itemTitle}>{item.title}</h2>

                        <div className={styles.priceInfo}>

                            Price: ₹{item.price} | Total: ₹{item.price * item.quantity}
                        </div>

                        <div className={styles.quantityControl}>

                            <button  onClick={() => handleDecrementQuantity(item.id)}  className={styles.quantityButton}> - </button>

                            <span className={styles.quantityDisplay}>{item.quantity}</span>

                            <button  onClick={() => handleIncreaseQuantity(item.id)}  className={styles.quantityButton} > + </button>
                        </div>

                       
                        <button  className={styles.removeBtn} onClick={() => handleRemove(item.id)} > Remove </button>

                    </div>
                ))}
            </div>

            <div className={styles.summary}>

                <h3>Subtotal ({cartItems.length} items):</h3>

                <h2 className={styles.totalAmount}>₹{subtotal.toFixed(2)}</h2>
                
                <button className={styles.checkoutButton}>Proceed to Checkout</button>
            </div>
        </div>
    );
}


