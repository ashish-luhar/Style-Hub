import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import hero1 from '../assets/hero/hero-1.jpg';
import hero2 from '../assets/hero/hero-2.jpg';
import Men from './Men';
import Female from './Female';

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [wishlist, setWishlist] = useState([]);

  const slides = [
    {
      id: 1,
      image: hero1,
      title: "SUMMER COLLECTION",
      subtitle: "Fall - Winter Collections 2030",
      description: "A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.",
      buttonText: "SHOP NOW"
    },
    {
      id: 2,
      image: hero2,
      title: "SUMMER COLLECTION",
      subtitle: "Fall - Winter Collections 2030",
      description: "A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.",
      buttonText: "SHOP NOW"
    }
  ];

  // Trending Products Data
  const trendingProducts = [
    {
      id: 1,
      name: "Classic Denim Jacket",
      price: "$89.00",
      details: "Vintage wash, Comfortable fit",
      rating: 5,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=300&h=300&fit=crop",
      isWishlisted: false
    },
    {
      id: 2,
      name: "Premium Cotton T-Shirt",
      price: "$45.00",
      details: "100% Organic cotton, Multiple colors",
      rating: 5,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      isWishlisted: false
    },
    {
      id: 3,
      name: "Leather Crossbody Bag",
      price: "$129.00",
      details: "Genuine leather, Adjustable strap",
      rating: 4,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop",
      isWishlisted: false
    },
    {
      id: 4,
      name: "Sneaker Collection",
      price: "$79.00",
      details: "Lightweight, Breathable design",
      rating: 5,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
      isWishlisted: false
    },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} style={{ color: index < rating ? '#4CAF50' : '#ddd' }}>
        ★
      </span>
    ));
  };

  return (
    <div className={styles.homeContainer}>
      {/* Hero Carousel Section */}
      <section className={styles.heroSection}>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselWrapper}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`
                }}
              >
                {/* Background Image */}
                <div
                  className={styles.backgroundImage}
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>

                {/* Content Overlay */}
                <div className={styles.contentOverlay}>
                  <div className={styles.heroContent}>
                    {/* Text and Social Icons Section */}
                    <div className={styles.textSection}>
                      <div className={styles.textContent}>
                        <span className={styles.collectionTag}>{slide.title}</span>
                        <h1 className={styles.mainTitle}>
                          Fall - Winter<br />Collections 2030
                        </h1>
                        <p className={styles.description}>{slide.description}</p>
                        <button className={styles.shopNowBtn}>
                          {slide.buttonText} →
                        </button>
                      </div>

                      <div className={styles.socialIcons}>
                        <a href="#" className={styles.socialIcon}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                        <a href="#" className={styles.socialIcon}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                        <a href="#" className={styles.socialIcon}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                          </svg>
                        </a>
                        <a href="#" className={styles.socialIcon}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      </div>
                      <div className={styles.dotPattern}></div>
                    </div>
                    {/* Right Section - Empty for balance */}
                    <div className={styles.imageSection}>
                      <div className={styles.dotPatternRight}></div>
                    </div>
                  </div>
                </div>
                {/* Navigation Arrows */}
                <div className={styles.navigationArrows}>
                  <button
                    className={styles.navArrow}
                    onClick={prevSlide}
                    aria-label="Previous slide"
                  >
                    ←
                  </button>
                  <button
                    className={styles.navArrow}
                    onClick={nextSlide}
                    aria-label="Next slide"
                  >
                    →
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Carousel Indicators */}
          <div className={styles.carouselIndicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className={styles.trendingSection}>
        <div className={styles.trendingContainer}>
          <h2 className={styles.trendingTitle}>Trending Products</h2>

          <div className={styles.trendingCarousel}>
            <div className={styles.trendingWrapper}>
              {trendingProducts.map((product) => (
                <div key={product.id} className={styles.productCard} onClick={() => handleProductClick(product.id)}>
                  <div className={styles.productImageContainer}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={styles.productImage}
                    />
                    <button
                      className={`${styles.wishlistBtn} ${wishlist.includes(product.id) ? styles.wishlistActive : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                    >
                      ♥
                    </button>
                  </div>

                  <div className={styles.productInfo}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productPrice}>{product.price}</p>
                    <p className={styles.productDetails}>{product.details}</p>

                    <div className={styles.productRating}>
                      <div className={styles.stars}>
                        {renderStars(product.rating)}
                      </div>
                      <span className={styles.reviewCount}>({product.reviews})</span>
                    </div>

                    <button className={styles.addToCartBtn}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Men/>
      <Female/>
    </div>
  );
};

export default Home;