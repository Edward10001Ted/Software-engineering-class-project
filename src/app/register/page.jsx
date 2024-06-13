'use client'
import React, { useState } from 'react';
import styles from './register.module.css';
import Image from 'next/image';
import Link from 'next/link';

const RegistrationPage = () => {
  const [identity, setIdentity] = useState('');

  const handleIdentityChange = (event) => {
    console.log('Selected identity:', event.target.value); // Debug log
    setIdentity(event.target.value);
  };

  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src='/Conclusion.png' width={400} height={600} className={styles.regimage} />
        </div>

        <div className={styles.loginCard}>
          <p className={styles.heading}>Registration</p>
          <div className={styles.options}>
            <p className={styles.identity}>I am a :</p>
            <div className={styles.radiox}>
              <div className={styles.set}>
                <input
                  type="radio"
                  id="student"
                  name="identity"
                  className={styles.optionCheck}
                  value="student"
                  onChange={handleIdentityChange}
                />
                <label htmlFor="student">Student</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="TA"
                  name="identity"
                  className={styles.optionCheck}
                  value="TA"
                  onChange={handleIdentityChange}
                />
                <label htmlFor="TA">Lecturer TA</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="lecturer"
                  name="identity"
                  className={styles.optionCheck}
                  value="lecturer"
                  onChange={handleIdentityChange}
                />
                <label htmlFor="lecturer">Lecturer</label>
              </div>
            </div>
          </div>
          <form className={styles.registrationForm}>
            <p className={styles.headDet}>
              {identity === 'lecturer' || identity === 'TA' ? 'Full Name' : 'First Name'}
            </p>
            <input
              type="text"
              placeholder={identity === 'lecturer' || identity === 'TA' ? 'Full Name' : 'First Name'}
              className={styles.inputField}
            />

            <p className={styles.headDet}>
              {identity === 'lecturer' || identity === 'TA' ? 'Enter Unique UG Password' : 'Surname'}
            </p>
            <input
              type="text"
              placeholder={identity === 'lecturer' || identity === 'TA' ? 'Unique UG Password' : 'Surname'}
              className={styles.inputField}
            />

            <p className={styles.headDet}>Date of birth</p>
            <input type="text" placeholder="Date of Birth" className={styles.inputField} />
            <p className={styles.headDet}>Your Email</p>
            <input type="text" placeholder="Email" className={styles.inputField} />
            <p className={styles.headDet}>Active phone number</p>
            <input type="text" placeholder="Phone Number" className={styles.inputField} />
            <p className={styles.headDet}>Location information</p>
            <div className={styles.location}>
              <input type="text" placeholder="Country" className={styles.inputFieldx} />
              <input type="text" placeholder="City" className={styles.inputField} />
            </div>
          </form>
          <div className={styles.submitx}>
            <Link href='/redirection' className={styles.submit}>Submit and login</Link>
          </div>

          <Link href='/' className={styles.logback}>Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
