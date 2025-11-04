import React, { useState } from "react";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const initialCart = [
  {
    id: 1,
    name: "Men's Round Neck T-Shirt – Black",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=100&h=100&fit=crop",
    size: "L",
    color: "Black",
    price: 799,
    qty: 1,
    colors: ["Black", "White", "Blue", "Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    name: "Women's Crop Top – Red",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    size: "M",
    color: "Red",
    price: 599,
    qty: 2,
    colors: ["Red", "Black", "White", "Pink"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    name: "Unisex Hoodie – Blue",
    image:
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?w=100&h=100&fit=crop",
    size: "XL",
    color: "Blue",
    price: 1299,
    qty: 1,
    colors: ["Blue", "Black", "Grey", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

export default function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(initialCart);

  const handleQty = (id, delta) => {
    setCart((cart) =>
      cart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            if (newQty <= 0) {
              return null;
            }
            return { ...item, qty: newQty };
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };

  const handleRemove = (id) => {
    setCart((cart) => cart.filter((item) => item.id !== id));
  };

  const handleSize = (id, size) => {
    setCart((cart) =>
      cart.map((item) => (item.id === id ? { ...item, size } : item))
    );
  };

  const handleColor = (id, color) => {
    setCart((cart) =>
      cart.map((item) => (item.id === id ? { ...item, color } : item))
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartHeader}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.cartTitle}>Cart (🛒 {totalItems} items)</div>
        <button className={styles.closeBtn} title="Close">
          ×
        </button>
      </div>
      <div className={styles.cartList}>
        {cart.length === 0 ? (
          <div className={styles.emptyCart}>Your cart is empty.</div>
        ) : (
          cart.map((item) => (
            <div className={styles.cartItem} key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.itemImage}
              />
              <div className={styles.itemInfo}>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.itemOptions}>
                  <select
                    value={item.size}
                    onChange={(e) => handleSize(item.id, e.target.value)}
                    className={styles.sizeSelect}
                  >
                    {item.sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  <select
                    value={item.color}
                    onChange={(e) => handleColor(item.id, e.target.value)}
                    className={styles.colorSelect}
                  >
                    {item.colors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.itemPriceQty}>
                  <span className={styles.itemPrice}>₹{item.price}</span>
                  <div className={styles.qtyControl}>
                    <button
                      onClick={() => handleQty(item.id, -1)}
                      className={styles.qtyBtn}
                    >
                      -
                    </button>
                    <span className={styles.qty}>{item.qty}</span>
                    <button
                      onClick={() => handleQty(item.id, 1)}
                      className={styles.qtyBtn}
                    >
                      +
                    </button>
                  </div>
                  <span className={styles.itemTotal}>
                    Total: ₹{item.price * item.qty}
                  </span>
                </div>
              </div>
              <button
                className={styles.removeBtn}
                onClick={() => handleRemove(item.id)}
                title="Remove"
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>
      <div className={styles.cartFooter}>
        <div className={styles.cartTotal}>Grand Total: ₹{totalPrice}</div>
        <button
          className={styles.checkoutBtn}
          onClick={() => navigate("/checkout")}
          disabled={cart.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}