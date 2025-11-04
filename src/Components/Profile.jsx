import React, { useState } from 'react';
import styles from './Profile.module.css';





export default function Profile() {
  const [profileData, setProfileData] = useState({
    fullName: 'Muhammad Insan Kamil',
    email: 'muhammadinsank@gmail.com',
    username: 'insank18',
    phoneNumber: '+62 87881122440',
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({
    fullName: profileData.fullName,
    email: profileData.email,
    username: profileData.username,
    phoneNumber: profileData.phoneNumber,
    profilePicture: profileData.profilePicture
  });

  const handleInputChange = (field, value) => {
    setTempData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setProfileData(tempData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData({
      fullName: profileData.fullName,
      email: profileData.email,
      username: profileData.username,
      phoneNumber: profileData.phoneNumber,
      profilePicture: profileData.profilePicture
    });
    setIsEditing(false);
  };

  const copyProfileLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/profile/${profileData.username}`);
    // You can add a toast notification here
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTempData(prev => ({
          ...prev,
          profilePicture: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteProfilePicture = () => {
    setTempData(prev => ({
      ...prev,
      profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }));
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        {/* Header Section */}
        <div className={styles.profileHeader}>
          <div className={styles.profileInfo}>
            <img 
              src={isEditing ? tempData.profilePicture : profileData.profilePicture} 
              alt="Profile" 
              className={styles.profilePicture}
            />
            <div className={styles.userDetails}>
              <h2 className={styles.userName}>
                {isEditing ? tempData.fullName : profileData.fullName}
                {/* <span className={styles.verifiedBadge}>
                  <i className="fas fa-check-circle"></i> Verified Account
                </span> */}
              </h2>
              <p className={styles.userEmail}>
                {isEditing ? tempData.email : profileData.email}
              </p>
            </div>
          </div>
          <div className={styles.headerActions}>
            {/* <button className={styles.copyLinkBtn} onClick={copyProfileLink}>
              <i className="fas fa-link"></i> Copy Link
            </button> */}
            <button 
              className={styles.editProfileBtn} 
              onClick={() => setIsEditing(!isEditing)}
            >
              <i className="fas fa-edit"></i> Edit Profile
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className={styles.profileForm}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Full Name</label>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Enter your full name"
                value={isEditing ? tempData.fullName : profileData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                disabled={!isEditing}
                className={styles.formInput}
              />
              {/* {isEditing && <i className="fas fa-check-circle validIcon"></i>} */}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Email</label>
            <div className={styles.inputContainer}>
              <input
                type="email"
                placeholder="Enter your email"
                value={isEditing ? tempData.email : profileData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={!isEditing}
                className={styles.formInput}
              />
              {/* <i className="fas fa-check-circle validIcon"></i> */}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Username</label>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Enter your username"
                value={isEditing ? tempData.username : profileData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                disabled={!isEditing}
                className={styles.formInput}
              />
              {/* <i className="fas fa-check-circle validIcon"></i> */}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Phone Number</label>
            <div className={styles.inputContainer}>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={isEditing ? tempData.phoneNumber : profileData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                disabled={!isEditing}
                className={styles.formInput}
              />
            </div>
          </div>

          {/* Profile Picture Section */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Profile Picture</label>
            <div className={styles.profilePictureSection}>
              <img 
                src={isEditing ? tempData.profilePicture : profileData.profilePicture} 
                alt="Profile" 
                className={styles.profilePictureThumbnail}
              />
              <div className={styles.profilePictureActions}>
                <label className={styles.uploadBtn}>
                  <i className="fas fa-upload"></i> Upload Image
                  <input
                    type="file"
                    accept="image/jpeg,image/jpg,image/png"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                  />
                </label>
                <button className={styles.deleteBtn} onClick={deleteProfilePicture}>
                  <i className="fas fa-trash"></i> Delete
                </button>
              </div>
              <p className={styles.fileInfo}>
                We only support JPEG, JPEG, or PNG file. 1 mb max.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <button className={styles.deleteAccountBtn}>
            <i className="fas fa-sign-out-alt"></i>Log Out
          </button>
          <div className={styles.formActions}>
            <button className={styles.cancelBtn} onClick={handleCancel}>
              Cancel
            </button>
            <button className={styles.saveBtn} onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
