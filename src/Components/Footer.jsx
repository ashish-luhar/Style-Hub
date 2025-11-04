import React from "react";
import styles from "./Footer.module.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        {/* About Us */}
        <div className={styles.footerCol}>
          <div className={styles.footerBrandLogo}>
            <img src={logo} alt="Style Hub Logo" className={styles.logoImage} />
            <span className={styles.brandName}>Style Hub</span>
          </div>
          <p className={styles.footerText}>
            Your one-stop shop for the latest fashion trends. Discover, shop, and express your style with confidence.
          </p>
        </div>

        {/* Contact Info */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerTitle}>Contact Info</h3>
          <p className={styles.footerText}>
            123 Fashion Ave,<br />
            Mumbai, India<br />
            <a className="text-white text-decoration-none" href="tel:+1234567890">+1 234 567 890</a><br />
            <a className="text-white text-decoration-none "  href="mailto:info@stylehub.com">info@stylehub.com</a>
          </p>
        </div>

        {/* Important Links */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/profile">My Profile</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerTitle}>Newsletter</h3>
          <p className={styles.footerText}>
            Subscribe to get the latest updates and offers.
          </p>
          <form className={styles.newsletterForm} onSubmit={e => e.preventDefault()}>
            <input type="email" className={styles.newsletterInput} placeholder="Enter your email" required />
            <button type="submit" className={styles.newsletterBtn}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>

      <div className={styles.footerDivider}></div>

      <div className={styles.footerBottom}>
        <div className={styles.footerCopyright}>
          &copy; {new Date().getFullYear()} Style Hub. All rights reserved.
        </div>
        <div className={styles.footerSocial}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
