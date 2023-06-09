import React, { useEffect } from "react";
import styles from "./LoadingScreen.module.css";

function LoadingScreen() {
  useEffect(() => {
    document.body.classList.add(`${styles.loading}`);
    return () => {
      document.body.classList.remove(`${styles.loading}`);
    };
  }, []);

  return (
    <div className={`${styles.container} ${styles["sk-cube-grid"]}`}>
      <div className={`${styles["sk-cube"]} ${styles["sk-cube1"]}`}></div>
      <div className={`${styles["sk-cube"]} ${styles["sk-cube2"]}`}></div>
      <div className={`${styles["sk-cube"]} ${styles["sk-cube3"]}`}></div>
      <div className={`${styles["sk-cube"]} ${styles["sk-cube4"]}`}></div>
      <div className={`${styles["sk-cube"]} ${styles["sk-cube5"]}`}></div>
      <div className={`${styles["sk-cube"]} ${styles["sk-cube6"]}`}></div>
      <div className={`${styles["sk-cube"]} ${styles["sk-cube7"]}`}></div>
      <div className={`${styles["sk-cube"]} ${styles["sk-cube8"]}`}></div>
      <div className={`${styles["sk-cube"]} ${styles["sk-cube9"]}`}></div>
    </div>
  );
}

export default LoadingScreen;
