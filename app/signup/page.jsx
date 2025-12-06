import Link from "next/link";
import styles from "../styles/signup.module.css"

export default function SignIn() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Sign In</h1>

        <form className={styles.form}>
          <label className={styles.label}>
            Email
            <input type="email" className={styles.input} placeholder="you@example.com" />
          </label>

          <label className={styles.label}>
            Password
            <input type="password" className={styles.input} placeholder="Enter your password" />
          </label>

        <Link href="/productlist">
         <button type="submit" className={styles.submitBtn}>
            Sign In
          </button>
                   </Link> 
          
        </form>
      </div>
    </div>
  );
}
