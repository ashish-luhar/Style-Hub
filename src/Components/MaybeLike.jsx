import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MaybeLike.module.css'; // Changed to 'styles' to match usage

const MaybeLike = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  const trendingProducts = 
    [
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
        // {
        //   id: 5,
        //   name: "Wool Sweater",
        //   price: "$95.00",
        //   details: "Soft merino wool, Winter essential",
        //   rating: 4,
        //   reviews: 134,
        //   image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop",
        //   isWishlisted: false
        // }
      
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? '#4CAF50' : '#ddd' }}>★</span>
    ));
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

  return (
    <div>
      <section className={styles.trendingSection}>
        <div className={styles.trendingContainer}>
          <h2 className={styles.trendingTitle}>SIMILAR PRODUCTS</h2>
          
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
      
    </div>
  );
};

export default MaybeLike;