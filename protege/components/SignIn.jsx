import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/SignIn.module.css';

export default function SignIn({ setOpt }) {
  const router = useRouter();

  const password = document.querySelector('#pass');
  const username = document.querySelector('#uname');

  const setError = (element, error) => {
    const txtField = element.parentElement;
    const span = txtField.querySelector('span');
    txtField.className = 'txt_field error';
    span.innerText = error;
  };

  const validateForm = () => {
    let returnVal = true;
    const pass = password.value.trim();
    const uname = username.value.trim();

    if (uname.length < 8) {
      setError(username, '* username too short!');
      returnVal = false;
    }

    if (pass.length < 8) {
      setError(password, '* password too short!');
      returnVal = false;
    }
    return returnVal;
  };

  const submitForm = () => {
    if (validateForm()) {
      // POST API
      router.push('/Home');
    } else {
      // warning message
      router.push('/Home');
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
            <label htmlFor="uname">
              Username:
              <input id="uname" name="uname" type="text" required />
            </label>
            <span>error message</span>
          </div>
          <div className={styles.txt_field}>
            <label htmlFor="pass">
              Password:
              <input id="pass" name="pass" type="password" required />
              <span>error message</span>
            </label>
          </div>
          <div className="forgot">Forgot Password?</div>
          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              router.push('/Home');
            }}
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
