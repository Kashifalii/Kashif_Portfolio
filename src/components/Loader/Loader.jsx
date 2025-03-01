import React, { useState, useEffect } from "react";
import styles from "../Loader/loader.module.css";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loaderContent}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Loading Application</p>
      </div>
    </div>
  );
};

export default Loader;
