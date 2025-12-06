import styles from "../app/styles/contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          required
          className={styles.input}
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          className={styles.input}
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          required
          className={styles.textarea}
        ></textarea>

        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
}

