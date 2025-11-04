import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTshirt, faUser, faShoppingCart, faSignInAlt, faUserPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

function NavigationBar({ cartItems }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate login state
  const [expanded, setExpanded] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }
  
  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container fluid>
        <Navbar.Brand href="/" className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
          <span className={styles.brandName}>Style Hub</span>
        </Navbar.Brand>

        {/* Desktop View Links and Search Bar */}
        <div className={`d-none d-lg-flex w-100 align-items-center justify-content-between`}>
          <Nav className={`${styles.navItems} mx-auto`} onClick={handleNavLinkClick}>
            <Nav.Link as={NavLink} to="/" className={styles.navLink}>
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products" className={styles.navLink}>
              <FontAwesomeIcon icon={faTshirt} /> Products
            </Nav.Link>
            {isLoggedIn && (
              <Nav.Link as={NavLink} to="/profile" className={styles.navLink}>
                <FontAwesomeIcon icon={faUser} /> My Profile
              </Nav.Link>
            )}
            {/* Desktop Cart Link */}
            <Nav.Link as={NavLink} to="/cart" className={`${styles.navLink}`}>
              <span className="position-relative">
                <FontAwesomeIcon icon={faShoppingCart} />
                {cartItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems}
                  </span>
                )}
              </span>
              <span className="ms-2">Cart</span>
            </Nav.Link>
          </Nav>

          <div className={styles.searchContainer}>
            <InputGroup className={styles.searchBox}>
              <Form.Control
                type="text"
                placeholder="Search products..."
                className={styles.searchInput}
              />
              <Button variant="outline-secondary" className={styles.searchBtn}>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup>
          </div>

          <div className={styles.authButtons}>
            {isLoggedIn ? (
              <Button
                className={`${styles.authBtn} ${styles.loginBtn}`}
                onClick={handleLogout}
              >
                <FontAwesomeIcon icon={faSignInAlt} /> Logout
              </Button>
            ) : (
              <>
                <Link to="/login">
                  <Button className={`${styles.authBtn} ${styles.loginBtn}`}>
                    <FontAwesomeIcon icon={faSignInAlt} /> Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className={`${styles.authBtn} ${styles.registerBtn}`}>
                    <FontAwesomeIcon icon={faUserPlus} /> Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile View Toggler Button */}
        <div className="d-flex align-items-center d-lg-none">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.toggleBtn} />
        </div>

        {/* Mobile Collapse Menu */}
        <Navbar.Collapse id="responsive-navbar-nav" className={styles.navCollapse}>
          <div className={`${styles.navContainerMobile} d-lg-none`}>
            <Nav className={styles.navItemsMobile} onClick={handleNavLinkClick}>
              <Nav.Link as={NavLink} to="/" className={styles.navLink}>
                <FontAwesomeIcon icon={faHome} /> Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/products" className={styles.navLink}>
                <FontAwesomeIcon icon={faTshirt} /> Products
              </Nav.Link>
              {isLoggedIn && (
                <Nav.Link as={NavLink} to="/profile" className={styles.navLink}>
                  <FontAwesomeIcon icon={faUser} /> My Profile
                </Nav.Link>
              )}
              {/* Mobile Cart Link */}
              <Nav.Link as={NavLink} to="/cart" className={styles.navLink}>
                <span className="position-relative">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {cartItems > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartItems}
                    </span>
                  )}
                </span>
                <span className="ms-2">Cart</span>
              </Nav.Link>
            </Nav>

            <div className={`${styles.searchContainerMobile}`}>
              <InputGroup className={styles.searchBox}>
                <Form.Control
                  type="text"
                  placeholder="Search products..."
                  className={styles.searchInput}
                />
                <Button variant="outline-secondary" className={styles.searchBtn}>
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </InputGroup>
            </div>
            
            <div className={styles.authButtonsMobile}>
              {isLoggedIn ? (
                <Button
                  className={`${styles.authBtn} ${styles.loginBtn}`}
                  onClick={handleLogout}
                >
                  <FontAwesomeIcon icon={faSignInAlt} /> Logout
                </Button>
              ) : (
                <>
                  <Link to="/login" onClick={handleNavLinkClick}>
                    <Button className={`${styles.authBtn} ${styles.loginBtn}`}>
                      <FontAwesomeIcon icon={faSignInAlt} /> Login
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={handleNavLinkClick}>
                    <Button className={`${styles.authBtn} ${styles.registerBtn}`}>
                      <FontAwesomeIcon icon={faUserPlus} /> Register
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

