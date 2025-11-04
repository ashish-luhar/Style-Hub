import React, { useState } from 'react';
import styles from './signup.module.css';
import loginImg from '../assets/loginpage.png';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    gender: '',
    age: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.leftSection}>
        <img src={loginImg} alt="Sign Up Visual" className={styles.signupImage} />
        <div className={styles.leftText}>
          <h2>Join Us!</h2>
          <p className="px-3">Sign up to create your account and start your fashion journey.</p>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.formBox}>
          <h2 className={styles.formTitle}>Create Your Account</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className={styles.input}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <div className={styles.row}>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className={styles.input}
                required
              >
                <option value="" disabled>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={form.age}
                onChange={handleChange}
                className={styles.input}
                min="1"
                required
              />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <button type="submit" className={styles.signupBtn}>Sign Up</button>
          </form>
          <div className={styles.orDivider}><span>Or Sign Up With</span></div>
          <div className={styles.socialRow}>
            <a href="#" className={styles.socialIcon}><i className="fab fa-google"></i></a>
            <a href="#" className={styles.socialIcon}><i className="fab fa-facebook"></i></a>
            <a href="#" className={styles.socialIcon}><i className="fab fa-instagram"></i></a>
            <a href="#" className={styles.socialIcon}><i className="fab fa-twitter"></i></a>
            <a href="#" className={styles.socialIcon}><i className="fab fa-linkedin"></i></a>
          </div>
          <div className={styles.signinRow}>
            Already have an account?
            <a href="#" className={styles.signupLink}>Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup; 