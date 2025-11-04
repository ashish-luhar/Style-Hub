// src/Components/Checkout.jsx
import React, { useState } from "react";
import styles from "./Checkout.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom"; // useNavigate import kiya

export default function Checkout() {
  const navigate = useNavigate(); // useNavigate hook use kiya
  const [formData, setFormData] = useState({
    country: "India",
    fullName: "",
    mobile: "",
    pincode: "",
    address1: "",
    address2: "",
    landmark: "",
    city: "",
    state: "",
    isDefault: false,
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Address submitted:", formData);
    // Address save hone ke baad Payment page par redirect
    navigate("/payment");
  };

  return (
    <div className={styles.checkoutPage}>
      {/* ... (baaki ka code wahi rahega) ... */}
      <div className={styles.checkoutHeader}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.checkoutTitle}>Add Delivery Address</div>
      </div>

      <form onSubmit={handleSubmit} className={styles.addressForm}>
        {/* ... (baaki ka form code wahi rahega) ... */}
        <div className={styles.formSection}>
          <h2>Enter a new delivery address</h2>
          <p className={styles.autoFillPrompt}>
            {/* <strong>Save time. Autofill your current location.</strong> */}
          </p>
        </div>

        <div className={styles.formSection}>
          <h3>Country/Region</h3>
          <div className={styles.countrySelect}>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={styles.formSelect}
            >
              <option value="India">India</option>
              {/* Add other countries as needed */}
            </select>
          </div>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full name (First and Last name)"
            className={styles.formInput}
            required
          />
        </div>

        <div className={styles.formSection}>
          <h3>Mobile number</h3>
          <p className={styles.hintText}>May be used to assist delivery</p>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile number"
            className={styles.formInput}
            required
          />
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="6 digits [0-9] PIN code"
            className={styles.formInput}
            pattern="\d{6}"
            required
          />
        </div>

        <div className={styles.formSection}>
          <h3>Address</h3>
          <input
            type="text"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            placeholder="Flat, House no., Building, Company, Apartment"
            className={styles.formInput}
            required
          />
          <input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            placeholder="Area, Street, Sector, Village"
            className={styles.formInput}
            required
          />
          <input
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            placeholder="Landmark (e.g. near apollo hospital)"
            className={styles.formInput}
          />
        </div>

        <div className={styles.formSection}>
          <h3>Town/City</h3>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Town/City"
            className={styles.formInput}
            required
          />
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={styles.formSelect}
            required
          >
            <option value="">Choose a state</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>

            {/* Add other Indian states */}
          </select>
        </div>

        <div className={styles.formSection}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="isDefault"
              checked={formData.isDefault}
              onChange={handleChange}
              className={styles.checkboxInput}
            />
            Make this my default address
          </label>
        </div>

        <div className={styles.formSection}>
        </div>

        <div className={styles.formActions}>
          <button type="submit" className={styles.submitButton}>
            Use this address
          </button>
        </div>
      </form>
    </div>
  );
}