import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AllProducts.module.css';

const menProducts = [
  { id: 1, name: 'Men\'s Classic Denim Jacket', price: '$89.00', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop', rating: 4.5, reviews: 128 },
  { id: 2, name: 'Men\'s Premium Cotton T-Shirt', price: '$45.00', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop', rating: 4.8, reviews: 256 },
  { id: 3, name: 'Men\'s Leather Crossbody Bag', price: '$129.00', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', rating: 4.6, reviews: 89 },
  { id: 4, name: 'Men\'s Sneaker Collection', price: '$79.00', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop', rating: 4.7, reviews: 203 },
  { id: 5, name: 'Men\'s Wool Sweater', price: '$95.00', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop', rating: 4.4, reviews: 156 },
  { id: 6, name: 'Men\'s Black T-Shirt', price: '$29.00', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop', rating: 4.9, reviews: 342 },
  { id: 7, name: 'Men\'s Casual Hoodie', price: '$65.00', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop', rating: 4.5, reviews: 167 },
  { id: 8, name: 'Men\'s Formal Shirt', price: '$55.00', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop', rating: 4.7, reviews: 234 },
];

const femaleProducts = [
  { id: 9, name: 'Women\'s Summer Dress', price: '$75.00', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop', rating: 4.8, reviews: 189 },
  { id: 10, name: 'Women\'s Winter Coat', price: '$120.00', image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=400&fit=crop', rating: 4.6, reviews: 145 },
  { id: 11, name: 'Women\'s T-Shirt', price: '$32.00', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop', rating: 4.6, reviews: 198 },
  { id: 12, name: 'Women\'s Scarf', price: '$25.00', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop', rating: 4.3, reviews: 87 },
  { id: 13, name: 'Women\'s Crop Top', price: '$38.00', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop', rating: 4.7, reviews: 156 },
  { id: 14, name: 'Women\'s Blouse', price: '$42.00', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop', rating: 4.5, reviews: 134 },
  { id: 15, name: 'Women\'s Jeans', price: '$68.00', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop', rating: 4.6, reviews: 223 },
  { id: 16, name: 'Women\'s Handbag', price: '$95.00', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', rating: 4.4, reviews: 98 },
];

export default function AllProducts() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('men'); // Default to men

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? '#FFD700' : '#ddd' }}>
          ★
        </span>
      );
    }
    return stars;
  };

  // Get products based on selected category
  const getCurrentProducts = () => {
    return selectedCategory === 'men' ? menProducts : femaleProducts;
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className={styles.allProductsSection}>
      <h1 className={styles.allProductsTitle}>All Products</h1>
      
      {/* Category Filter Buttons */}
      <div className={styles.categoryFilter}>
        <button 
          className={`${styles.categoryBtn} ${selectedCategory === 'men' ? styles.activeCategory : ''}`}
          onClick={() => setSelectedCategory('men')}
        >
          <i className="fas fa-male"></i> Men
        </button>
        <button 
          className={`${styles.categoryBtn} ${selectedCategory === 'female' ? styles.activeCategory : ''}`}
          onClick={() => setSelectedCategory('female')}
        >
          <i className="fas fa-female"></i> Female
        </button>
      </div>

      <div className={styles.productsGrid}>
        {getCurrentProducts().map(product => (
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
              <div className={styles.productDetails}>
                <div className={styles.productRating}>
                  <span className={styles.stars}>{renderStars(product.rating)}</span>
                  <span className={styles.reviewCount}>({product.reviews})</span>
                </div>
                <p className={styles.productPrice}>{product.price}</p>
              </div>
              <button className={styles.addToCartBtn}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 