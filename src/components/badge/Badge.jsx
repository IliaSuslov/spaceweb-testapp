import React from "react";
import styles from "./Badge.module.css";
import * as FaIcons from "react-icons/fa";

const Badge = ({ value }) => {
  return (
    <div className={styles.notification}>
      <FaIcons.FaRegBell className={styles.icon} />
      <span className={styles.badge}>{value}</span>
    </div>
  );
};
export default Badge;
