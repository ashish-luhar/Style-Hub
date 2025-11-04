// src/Components/Payment.jsx
import React, { useState } from "react";
import styles from "./Payment.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cashOnDelivery"); // Default to Cash on Delivery
  const [upiId, setUpiId] = useState(""); // New state to track UPI input

  const handleReviewOrderClick = () => {
    navigate("/cart");
  };

  const handleAddCardClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleUpiInputChange = (e) => {
    setUpiId(e.target.value);
  };

  const deliveryAddress = {
    name: "Ashish",
    address: "E-6 Varia flat, Visat Circle, shukan mall, visat, Ahmedabad, GUJARAT, 380005, India",
  };

  const orderSummary = {
    items: 2697.00,
    delivery: 120.00,
    marketplaceFee: 5.00,
    freeDelivery: -120.00,
  };

  const total = orderSummary.items + orderSummary.delivery + orderSummary.marketplaceFee + orderSummary.freeDelivery;

  return (
    <div className={styles.paymentPage}>
      <div className={styles.container}>
        <div className={styles.paymentDetails}>
          <div className={styles.paymentHeader}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <div className={styles.paymentTitle}>Payment Method</div>
          </div>
          <div className={styles.paymentContent}>
            <div className={styles.deliverySection}>
              <h3>Delivering to {deliveryAddress.name}</h3>
              <p>{deliveryAddress.address}</p>
              <button onClick={''} className={styles.changeBtn}>Change</button>
            </div>
            <div className={styles.paymentMethodSection}>
              <h3>Payment method</h3>
              <div className={styles.paymentOptions}>
                <div className={styles.paymentOption}>
                  <input
                    type="radio"
                    id="creditCard"
                    name="payment"
                    value="creditCard"
                    checked={selectedPaymentMethod === "creditCard"}
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor="creditCard">
                    Credit or debit card
                    <div className={styles.cardLogos}>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOK-ExH64w4vaz6r2HY7kpEc0SEZKmpq7CKg&s" alt="VISA" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt="MasterCard" />
                      <img src="https://finshiksha.com/wp-content/uploads/2021/08/Amex-Banner-Image-2.jpg" alt="Amex" />
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9R_U_bLuWtEDhlITfOCxkWdKfbWi06nMbw&s" alt="Diners" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/1200px-Rupay-Logo.png" alt="RuPay" />
                    </div>
                    {/* यह बटन अब हमेशा दिखेगा, चाहे रेडियो बटन सिलेक्टेड हो या नहीं */}
                    <button onClick={handleAddCardClick} className={styles.craditBtn}>
                      Add a new credit or debit
                    </button>
                  </label>
                </div>

                <div className={styles.paymentOption}>
                  <input
                    type="radio"
                    id="netBanking"
                    name="payment"
                    value="netBanking"
                    checked={selectedPaymentMethod === "netBanking"}
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor="netBanking">
                    Net Banking
                    {selectedPaymentMethod === "netBanking" && (
                      <select className={styles.netBankingSelect}>
                        <option value="">Choose an Option</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="other">Other Banks</option>
                      </select>
                    )}
                  </label>
                </div>

                <div className={styles.paymentOption}>
                  <input
                    type="radio"
                    id="upiApps"
                    name="payment"
                    value="upiApps"
                    checked={selectedPaymentMethod === "upiApps"}
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor="upiApps">
                    Other UPI Apps
                    {selectedPaymentMethod === "upiApps" && (
                      <div className={styles.upiDetails}>
                        <p className={styles.upiTitle}>Please enter your UPI ID</p>
                        <div className={styles.upiInputContainer}>
                          <input
                            type="text"
                            placeholder="Enter UPI ID"
                            className={styles.upiInput}
                            value={upiId}
                            onChange={handleUpiInputChange}
                          />
                          <button className={`${styles.verifyBtn} ${upiId ? styles.verifyBtnActive : ''}`}>
                            Verify
                          </button>
                        </div>
                        <p className={styles.upiFormat}>The UPI ID is in the format of name/phone number@bankname</p>
                      </div>
                    )}
                  </label>
                </div>

                <div className={styles.paymentOption}>
                  <input
                    type="radio"
                    id="cashOnDelivery"
                    name="payment"
                    value="cashOnDelivery"
                    checked={selectedPaymentMethod === "cashOnDelivery"}
                    onChange={handlePaymentMethodChange}
                  />
                  <label htmlFor="cashOnDelivery">
                    Cash on Delivery/Pay on Delivery
                    <p className={styles.codInfo}>
                      Cash, UPI and Cards accepted. <a href="#">Know more.</a>
                    </p>
                  </label>
                </div>
                <button className={styles.usePaymentBtn}>Use this payment method</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.orderSummary}>
          <div className={styles.summaryBox}>
            <div className={styles.summaryCalculation}>
              <div className={styles.summaryItem}>
                <span>Items:</span>
                <span>₹{orderSummary.items.toFixed(2)}</span>
              </div>
              <div className={styles.summaryItem}>
                <span>Delivery:</span>
                <span>₹{orderSummary.delivery.toFixed(2)}</span>
              </div>
              <div className={styles.summaryItem}>
                <span>Marketplace Fee:</span>
                <span>₹{orderSummary.marketplaceFee.toFixed(2)}</span>
              </div>
              <div className={`${styles.summaryItem} ${styles.freeDelivery}`}>
                <span>FREE Delivery</span>
                <span>₹{orderSummary.freeDelivery.toFixed(2)}</span>
              </div>
              <div className={styles.orderTotal}>
                <span>Order Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
            <button className={styles.reviewOrderBtn} onClick={handleReviewOrderClick}>
              Review Order
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <div className={styles.popupHeader}>
              <h2 className={styles.popupTitle}>Add a new credit or debit card</h2>
              <button className={styles.closeBtn} onClick={handleClosePopup}>
                &times;
              </button>
            </div>
            <div className={styles.popupBody}>
              <div className={styles.inputGroup}>
                <label htmlFor="cardNumber">Card number</label>
                <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" />
              </div>

              <div className={styles.inputGroupDate}>
                <div className={styles.dateField}>
                  <label htmlFor="expiryMonth">Expiry Date</label>
                  <div className={styles.dateInputs}>
                    <select id="expiryMonth">
                      <option>MM</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                          {String(i + 1).padStart(2, '0')}
                        </option>
                      ))}
                    </select>
                    <select id="expiryYear">
                      <option>YYYY</option>
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i} value={new Date().getFullYear() + i}>
                          {new Date().getFullYear() + i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="cardName">Name on card</label>
                <input type="text" id="cardName" placeholder="Ashish" />
              </div>

              <p className={styles.note}>
                Please ensure that you enable your card for online payments from your bank's app.
              </p>

              <div className={styles.popupCardLogos}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOK-ExH64w4vaz6r2HY7kpEc0SEZKmpq7CKg&s" alt="VISA" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt="MasterCard" />
                <img src="https://finshiksha.com/wp-content/uploads/2021/08/Amex-Banner-Image-2.jpg" alt="Amex" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9R_U_bLuWtEDhlITfOCxkWdKfbWi06nMbw&s" alt="Diners" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/1200px-Rupay-Logo.png" alt="RuPay" />
              </div>
            </div>

            <div className={styles.popupFooter}>
              <button className={styles.cancelBtn} onClick={handleClosePopup}>
                Cancel
              </button>
              <button className={styles.continueBtn}>Continue</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}