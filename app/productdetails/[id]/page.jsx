"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "../../styles/productdetails.module.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        console.error("Failed to fetch product:", err);
        setProduct(null);
      });
  }, [id]);

  if (!product) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.productLayout}>
        
        {/* LEFT IMAGE SECTION */}
        <div className={styles.imageSection}>
          <img
            src={product.thumbnail}                // 🔥 DummyJSON main image
            alt={product.title}
            className={styles.productImage}
          />

          <p className={styles.category}>
            {product.brand} • {product.category}   {/* 🔥 brand + category */}
          </p>
        </div>

        {/* RIGHT DETAILS SECTION */}
        <div className={styles.detailsSection}>
          <h1 className={styles.title}>{product.title}</h1>

          <p className={styles.price}>₹ {product.price}</p>

          <button className={styles.buyBtn}>Buy</button>

          <h3>Product Description</h3>
          <p className={styles.description}>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
