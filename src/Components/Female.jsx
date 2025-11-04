import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const femaleProducts = [
  { id: 1, name: 'Women Floral Dress', price: '$79.00', details: 'Chiffon, Pink', rating: 5, reviews: 250, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop' },
  { id: 2, name: 'Women Handbag', price: '$99.00', details: 'Leather, Black', rating: 4, reviews: 180, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop' },
  { id: 3, name: 'Women Heels', price: '$59.00', details: 'Stiletto, Red', rating: 5, reviews: 210, image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&h=400&fit=crop' },
  { id: 4, name: 'Women Sunglasses', price: '$35.00', details: 'UV Protection, Brown', rating: 4, reviews: 120, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=400&h=400&fit=crop' },
  { id: 5, name: 'Women White Sneakers', price: '$69.00', details: 'Comfort sole, White', rating: 5, reviews: 190, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop' },
  { id: 6, name: 'Women Scarf', price: '$25.00', details: 'Silk, Blue', rating: 4, reviews: 80, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop' },
  { id: 7, name: 'Women Watch', price: '$120.00', details: 'Rose Gold', rating: 5, reviews: 130, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop' },
  { id: 8, name: 'Women Earrings', price: '$39.00', details: 'Gold Plated', rating: 4, reviews: 95, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=400&h=400&fit=crop' },
  { id: 9, name: 'Women Blazer', price: '$89.00', details: 'Formal, Black', rating: 5, reviews: 110, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop' },
  { id: 10, name: 'Women Tote Bag', price: '$59.00', details: 'Canvas, Beige', rating: 4, reviews: 140, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop' },
  { id: 11, name: 'Women Cardigan', price: '$49.00', details: 'Wool, Grey', rating: 5, reviews: 100, image: 'https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?w=400&h=400&fit=crop' },
  { id: 12, name: 'Women Hat', price: '$19.00', details: 'Straw, Summer', rating: 4, reviews: 60, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=400&h=400&fit=crop' },
];

const renderStars = (rating) => Array.from({ length: 5 }, (_, i) => <span key={i} style={{ color: i < rating ? '#4CAF50' : '#ddd' }}>★</span>);

export default function Female() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

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
    <div className={styles.trendingSection}>
      <div className={styles.trendingContainer}>
        <h2 className={styles.trendingTitle}>Women's Collection</h2>
        <div className={styles.trendingCarousel}>
          <div className={styles.trendingWrapper}>
            {femaleProducts.map(product => (
              <div key={product.id} className={styles.productCard} onClick={() => handleProductClick(product.id)}>
                <div className={styles.productImageContainer}>
                  <img src={product.image} alt={product.name} className={styles.productImage} />
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
                    <div className={styles.stars}>{renderStars(product.rating)}</div>
                    <span className={styles.reviewCount}>({product.reviews})</span>
                  </div>
                  <button className={styles.addToCartBtn}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}