import React from "react";
import styles from "../container/container.module.css";

function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
