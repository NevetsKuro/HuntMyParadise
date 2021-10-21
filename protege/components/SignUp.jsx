/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../styles/SignUp.module.css';

export default function SignUp({ setOpt }) {
  const router = useRouter();

  const setError = (id, error) => {
    // document.querySelector('#efname').innerHTML = error;
    // document.querySelector('#elname').innerHTML = error;
    const txtField = id.parentElement;
    console.log(error);
    const span = txtField.querySelector('span');
    txtField.className = 'txt_field error';
    span.innerText = error;
  };
  const validateForm = () => {
    let returnVal = true;
    const firstName = document.querySelector('#fname');
    const lastName = document.querySelector('#lname');
    // const date = document.querySelector('#date');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const password = document.querySelector('#password');
    const fname = firstName.value.trim();
    const lname = lastName.value.trim();
    // const datevalue = date.value.trim();
    // const emailvalue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();

    if (/[A-Z]/.test(fname[0])) {
      // fname
      returnVal = true;
    } else {
      setError(firstName, '*first letter should be capital');
      returnVal = false;
    }
    if (fname.length < 2) {
      // fname
      setError(firstName, '*too short!');
      returnVal = false;
    }
    if (/[A-Z]/.test(lname[0])) {
      // lname
      returnVal = true;
    } else {
      setError(lastName, '*first letter should be capital');
      returnVal = false;
    }
    if (/^[789]\d{9}$/.test(phoneValue)) {
      // phone
      returnVal = true;
    } else {
      setError(phone, '*enter a valid phone number');
      returnVal = false;
    }
    // password
    if (passwordValue.length < 8) {
      setError(password, '* password too short!');
      returnVal = false;
    }

    return returnVal;
  };
  const submitForm = (e) => {
    e.preventDefault();
    const firstName = document.querySelector('#fname');
    const lastName = document.querySelector('#lname');
    // const date = document.querySelector('#date');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const password = document.querySelector('#password');
    if (validateForm()) {
      // POST API
      axios
        .post('http://localhost:5000/api/users', {
          name: firstName.value + lastName.value,
          email: email.value,
          password: password.value,
        })
        .then((response) => {
          console.log(response.data);
          router.push('/', { opt: 'signIn' });
          alert('Success!');
        })
        .catch((error) => {
          alert('failed to sign up!');
          console.log(error);
        });
    } else {
      // warning message
      alert('Invalid data!');
    }
  };
  useEffect(() => {
    setOpt(router.query.opt);
  }, [router.query.opt, setOpt]);

  return (
    <>
      <div className={styles.login_container}>
        <h1>Sign up</h1>
        <form
          id="signup"
          name="signup"
          action="#"
          onSubmit={submitForm}
          method="POST"
        >
          <div className={styles.txt_field}>
            <label htmlFor="fname">
              First Name:
              <input
                id="fname"
                name="fname"
                type="text"
                required
                maxLength="25"
              />
              <span id="efname">Error message</span>
            </label>
          </div>
          <div className={styles.txt_field}>
            <label htmlFor="lname">
              Last Name:
              <input
                id="lname"
                name="lname"
                type="text"
                required
                maxLength="25"
              />
              <span id="elname">Error message</span>
            </label>
          </div>
          <div className={styles.txt_field}>
            <label htmlFor="date">
              Date of Birth:
              <input
                id="date"
                name="date"
                className={styles.date}
                type="date"
                required
              />
              <span id="edob">Error message</span>
            </label>
          </div>
          <div className={styles.txt_field}>
            <label htmlFor="phone">
              Phone:
              <input
                id="phone"
                name="phone"
                type="number"
                required
                title="Enter a 10 digit Number."
                pattern="^/d{10}$"
              />
              <span id="ephone">Error message</span>
            </label>
          </div>
          <div className={styles.txt_field}>
            <label htmlFor="email">
              Email:
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength="40"
              />
              <span id="eemail">Error message</span>
            </label>
          </div>
          <div className={styles.txt_field}>
            <label htmlFor="password">
              Password:
              <input id="password" name="password" type="password" required />
              <span id="epass">Error message</span>
            </label>
          </div>

          <input type="submit" className={styles.submit} value="Sign up" />
          <div className={styles.sign_uplink}>
            Already a User?{' '}
            {/* <span onClick={() => setOpt('signIn')} aria-hidden="true">
              Sign in
            </span> */}
            <Link
              href={{
                pathname: '/',
                query: { opt: 'signIn' },
              }}
            >
              <a href="/">Sign In</a>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
SignUp.propTypes = {
  setOpt: PropTypes.func.isRequired,
};
