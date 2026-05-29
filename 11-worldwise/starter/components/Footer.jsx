import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; {new Date().getFullYear()} WorldWise Inc.</p>
    </footer>
  );
}

export default Footer;
