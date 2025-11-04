import React, { useState } from 'react';
import styles from './login.module.css';
import loginImg from '../assets/loginpage.png';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '', remember: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftSection}>
        <img src={loginImg} alt="Login Visual" className={styles.loginImage} />
        <div className={styles.leftText}>
          <h2>Welcome Back!</h2>
          <p className='px-3'>Login to access your account and explore the latest trends.</p>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.formBox}>
          <h2 className={styles.formTitle}>Login to Your Account</h2>
          <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className={styles.input}
              required
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className={styles.input}
              required
              autoComplete="off"
            />
            <div className={styles.checkboxRow}>
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                id="remember"
                className={styles.checkbox}
              />
              <label htmlFor="remember" className={styles.checkboxLabel}>
                Remember me
              </label>
            </div>
            <button type="submit" className={styles.loginBtn}>Login</button>
          </form>
          <div className={styles.orDivider}><span>Or Login With</span></div>
          <div className={styles.socialRow}>
            <a href="#" className={styles.socialIcon}><i className="fab fa-google"></i></a>
            <a href="#" className={styles.socialIcon}><i className="fab fa-facebook"></i></a>
            <a href="#" className={styles.socialIcon}><i className="fab fa-instagram"></i></a>
            <a href="#" className={styles.socialIcon}><i className="fab fa-twitter"></i></a>
            <a href="#" className={styles.socialIcon}><i className="fab fa-linkedin"></i></a>
          </div>
          <div className={styles.signinRow}>
            Don't have an account? <a href="#" className={styles.signupLink}>Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 