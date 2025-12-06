// "use client";
// import styles from "../styles/productcard.module.css"
// import Link from "next/link";
// import { useDispatch } from "react-redux";
// import { ADD_TO_CART } from "../redux/actions";
// export default function ProductCard({ product }) {


//   const dispatch  = useDispatch()

//    const handleAddToCart = () => {
//     dispatch({
//       type: ADD_TO_CART,
//       payload: product
//     });

//     console.log(`${product.title} added to cart!`);
//   };


//   return (
//    <div className={styles.card}>
//   <Link href={`/productdetails/${product.id}`}>
//     <img
//       src={product.image}
//       alt={product.title}
//       className={styles.image} />
 

//   <div className={styles.title}>{product.title}</div>
//    </Link>

   
//   <div className={styles.price}>₹{product.price}</div>


//   <div className={styles.buttonRow}>



// <button   className={styles.cartBtn} onClick={handleAddToCart} > Add to Cart </button>
  


// </div>



// </div>
//   );
// }


"use client";
import styles from "../styles/productcard.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../redux/actions";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });

    console.log(`${product.title} added to cart!`);
  };

  return (
    <div className={styles.card}>
      {/* Product Details Link */}
      <Link href={`/productdetails/${product.id}`}>
        <img
          src={product.thumbnail}         // 🔥 DummyJSON thumbnail used
          alt={product.title}
          className={styles.image}
        />

        <div className={styles.title}>{product.title}</div>
      </Link>

      {/* Price */}
      <div className={styles.price}>₹{product.price}</div>

      {/* Buttons */}
      <div className={styles.buttonRow}>
        <button className={styles.cartBtn} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
