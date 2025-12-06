import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          Brand<span>hub</span>
        </div>

       
        <form className={styles.searchForm}>
          <input type="text" placeholder="Search products..." />
          <button type="submit">🔍</button>
        </form>

        <nav className={styles.nav}>
          <Link href="/homepage">Home</Link>
          <Link href="/productlist">Our Products</Link>
          <Link href="/#limited">Limited Edition</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className={styles.headerActions}>

      <Link href="/signup">  <button className={styles.outlineBtn}>Sign in</button>  </Link>  

          <Link href="/cart" className={styles.cartBubble}    >
         
            🛒
          </Link>
          
        </div>
      </header>
    </>
  );
}

