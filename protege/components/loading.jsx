import React from 'react';
import styles from '../styles/Home.module.css';

export default function LoadingMessage() {
  return (
    <div className={styles.splashScreen}>
      <img
        src="https://i.pinimg.com/originals/ae/51/e1/ae51e1395e87cc72c6021df5445cc5f8.gif"
        alt="loadingScreen"
      />
    </div>
  );
}
