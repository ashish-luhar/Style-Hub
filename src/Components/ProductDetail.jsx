import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductDetail.module.css";
// import logo from "../assets/logo.png";
import MaybeLike from './MaybeLike'



// Sample product data - in real app this would come from API
const productData = {
  1: {
    id: 1,
    name: "Men's Classic Denim Jacket",
    brand: "Style Hub",
    price: 89.0,
    originalPrice: 120.0,
    rating: 4.5,
    reviews: 128,
    description:
      "Premium denim jacket with classic styling. Perfect for casual and semi-formal occasions. Features comfortable fit and durable construction.",
    colors: [
      {
        name: "Classic Blue",
        code: "#1e3a8a",
        image:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop",
      },
      {
        name: "Black",
        code: "#000000",
        image:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop",
      },
      {
        name: "Grey",
        code: "#6b7280",
        image:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop",
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    ],
    category: "men",
  },
  2: {
    id: 2,
    name: "Women's Summer Dress",
    brand: "Style Hub",
    price: 75.0,
    originalPrice: 95.0,
    rating: 4.8,
    reviews: 189,
    description:
      "Elegant summer dress perfect for warm weather. Features breathable fabric and flattering silhouette for all occasions.",
    colors: [
      {
        name: "Floral Pink",
        code: "#ec4899",
        image:
          "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
      },
      {
        name: "Sky Blue",
        code: "#3b82f6",
        image:
          "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
      },
      {
        name: "Mint Green",
        code: "#10b981",
        image:
          "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop",
    ],
    category: "female",
  },
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  const product = productData[id];

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Product not found</h2>
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? "#FFD700" : "#ddd" }}>
          ★
        </span>
      );
    }
    return stars;
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    // Add to cart logic here
    alert("Added to cart!");
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    // Buy now logic here
    alert("Proceeding to checkout!");
  };

  return (
    <div className={styles.productDetailPage}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.breadcrumb}>
          <span onClick={() => navigate("/")}>Home</span>
          <span> / </span>
          <span onClick={() => navigate("/products")}>Products</span>
          <span> / </span>
          <span>{product.category === "men" ? "Men" : "Women"}</span>
          <span> / </span>
          <span>{product.name}</span>
        </div>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left"></i> Back
        </button>
      </div>

      <div className={styles.productContainer}>
        {/* Left Side - Image Gallery */}
        <div className={styles.imageSection}>
          <div className={styles.mainImage}>
            <img src={product.images[selectedImage]} alt={product.name} />
            <button
              className={`${styles.wishlistBtn} ${
                wishlist ? styles.active : ""
              }`}
              onClick={() => setWishlist(!wishlist)}
            >
              ♥
            </button>
          </div>
          <div className={styles.thumbnailGrid}>
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`${styles.thumbnail} ${
                  selectedImage === index ? styles.active : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className={styles.productInfo}>
          <div className={styles.brandLink}>
            Visit the {product.brand} Store
          </div>

          <h1 className={styles.productName}>{product.name}</h1>

          <div className={styles.rating}>
            <span className={styles.stars}>{renderStars(product.rating)}</span>
            <span className={styles.ratingText}>{product.rating}</span>
            <span className={styles.reviews}>({product.reviews} ratings)</span>
          </div>

          <div className={styles.priceSection}>
            <span className={styles.currentPrice}>₹{product.price}</span>
            <span className={styles.originalPrice}>
              ₹{product.originalPrice}
            </span>
            <span className={styles.discount}>
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              )}
              % off
            </span>
          </div>

          <div className={styles.description}>{product.description}</div>

          {/* Color Selection */}
          <div className={styles.colorSection}>
            <label className={styles.sectionLabel}>
              Colour: {product.colors[selectedColor].name}
            </label>
            <div className={styles.colorGrid}>
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`${styles.colorOption} ${
                    selectedColor === index ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedColor(index)}
                >
                  <div
                    className={styles.colorCircle}
                    style={{ backgroundColor: color.code }}
                  ></div>
                  <span className={styles.colorName}>{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className={styles.sizeSection}>
            <label className={styles.sectionLabel}>Size:</label>
            <div className={styles.sizeGrid}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`${styles.sizeOption} ${
                    selectedSize === size ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className={styles.quantitySection}>
            <label className={styles.sectionLabel}>Quantity:</label>
            <div className={styles.quantityControl}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className={styles.quantityBtn}
              >
                -
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className={styles.quantityBtn}
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            <button className={styles.addToCartBtn} onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className={styles.buyNowBtn} onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>

          {/* Additional Options */}
          <div className={styles.additionalOptions}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" />
              Add gift options
            </label>
            <button className={styles.wishlistLink}>Add to Wish List</button>
          </div>
        </div>
      </div>
      <MaybeLike/>
    </div>
  );
}
