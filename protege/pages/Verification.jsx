import { Axios } from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/verify.module.css';

export default function Verification() {
  const router = useRouter();
  const resendMail = (email) => {
    Axios.post('http://localhost:5000/api/users/verify', {
      email,
    })
      .then((response) => {
        console.log(response.data);
        router.push('/Home');
      })
      .catch((error) => {
        alert('Failed to send');
        console.log(error);
      });
  };
  return (
    <>
      <div className={styles.otpContainer}>
        <div className={styles.otpInnerContainer}>
          <h2>Enter OTP</h2>
          <div className={styles.otpInputs}>
            {[1, 2, 3, 4, 5, 6].map((x, i) => (
              <input key={x} className={styles.OTPCode} placeholder="-" />
            ))}
          </div>
          <p
            className="text-underline"
            onClick={() => resendMail()}
            aria-hidden="true"
          >
            Resend mail?
          </p>
          <button className={styles.VerifyButton} type="button">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
