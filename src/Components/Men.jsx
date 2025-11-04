import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const menProducts = [
  { id: 1, name: 'Men Denim Jacket', price: '$99.00', details: 'Classic fit, Blue', rating: 5, reviews: 210, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop' },
  { id: 2, name: 'Men White Sneakers', price: '$79.00', details: 'Comfort sole, White', rating: 4, reviews: 180, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop' },
  { id: 3, name: 'Men Black T-Shirt', price: '$29.00', details: '100% Cotton, Black', rating: 5, reviews: 320, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop' },
  { id: 4, name: 'Men Chinos', price: '$49.00', details: 'Slim fit, Khaki', rating: 4, reviews: 150, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop' },
  { id: 5, name: 'Men Hoodie', price: '$59.00', details: 'Fleece, Grey', rating: 5, reviews: 200, image: 'https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?w=400&h=400&fit=crop' },
  { id: 6, name: 'Men Leather Belt', price: '$25.00', details: 'Genuine leather, Brown', rating: 4, reviews: 90, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop' },
  { id: 7, name: 'Men Sports Watch', price: '$120.00', details: 'Waterproof, Black', rating: 5, reviews: 110, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop' },
  { id: 8, name: 'Men Sunglasses', price: '$35.00', details: 'UV Protection, Black', rating: 4, reviews: 75, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=400&h=400&fit=crop' },
  { id: 9, name: 'Men Formal Shoes', price: '$89.00', details: 'Leather, Brown', rating: 5, reviews: 140, image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&h=400&fit=crop' },
  { id: 10, name: 'Men Checked Shirt', price: '$39.00', details: 'Cotton, Red/Black', rating: 4, reviews: 160, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop' },
  { id: 11, name: 'Men Bomber Jacket', price: '$109.00', details: 'Navy, Zipper', rating: 5, reviews: 98, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=400&h=400&fit=crop' },
  { id: 12, name: 'Men Beanie', price: '$19.00', details: 'Wool, Black', rating: 4, reviews: 60, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop' },
];

const renderStars = (rating) => Array.from({ length: 5 }, (_, i) => <span key={i} style={{ color: i < rating ? '#4CAF50' : '#ddd' }}>★</span>);

export default function Men() {
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
        <h2 className={styles.trendingTitle}>Men's Collection</h2>
        <div className={styles.trendingCarousel}>
          <div className={styles.trendingWrapper}>
            {menProducts.map(product => (
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