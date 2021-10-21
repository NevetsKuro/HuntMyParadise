import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../styles/SignIn.module.css';

export default function SignIn({ setOpt }) {
  const router = useRouter();

  const setError = (element, error) => {
    const txtField = element.parentElement;
    const span = txtField.querySelector('span');
    txtField.className = 'txt_field error';
    span.innerText = error;
  };

  const validateForm = () => {
    let returnVal = true;
    const password = document.querySelector('#pass');
    const emailId = document.querySelector('#email');
    const pass = password.value.trim();
    const email = emailId.value.trim();

    if (email.length < 8) {
      setError(emailId, '* username too short!');
      returnVal = false;
    }

    if (pass.length < 8) {
      setError(password, '* password too short!');
      returnVal = false;
    }
    return returnVal;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // POST API
      const password = document.querySelector('#pass');
      const emailId = document.querySelector('#email');
      const email = emailId.value.trim();
      const pass = password.value.trim();
      axios
        .post('http://localhost:5000/api/users/authenticate', {
          email,
          password: pass,
        })
        .then((response) => {
          console.log(response.data);
          router.push('/Home');
        })
        .catch((error) => {
          alert('failed to sign up!');
          console.log(error);
        });
    } else {
      // warning message
      alert('Invalid Data!');
    }
  };

  useEffect(() => {
    setOpt(router.query.opt);
  }, [router.query.opt, setOpt]);
  return (
    <>
      <div className={styles.login_container}>
        <h1>Login</h1>
        <form id="form" onSubmit={submitForm} method="POST">
          <div className={styles.txt_field}>
            <label htmlFor="email">
              Email:
              <input id="email" name="email" type="email" value="admin@email.com" required />
            </label>
            <span>error message</span>
          </div>
          <div className={styles.txt_field}>
            <label htmlFor="pass">
              Password:
              <input id="pass" name="pass" type="password" value="123456789" required />
              <span>error message</span>
            </label>
          </div>
          <div className="forgot">Forgot Password?</div>
          <input
            type="submit"
            // onClick={(e) => {
            //   e.preventDefault();
            //   router.push('/Home');
            // }}
            className={styles.submit}
            value="Login"
          />
          <div className={styles.sign_uplink}>
            Not a User?{' '}
            {/* <span onClick={() => setOpt('signOut')} aria-hidden="true">
              Sign Up
            </span> */}
            <Link
              href={{
                pathname: '/',
                query: { opt: 'signUp' },
              }}
            >
              <a href="/">Sign Up</a>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
SignIn.propTypes = {
  setOpt: PropTypes.func.isRequired,
};
