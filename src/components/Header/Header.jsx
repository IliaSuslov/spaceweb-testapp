import React from "react";
import styles from "./Header.module.css";
import Badge from "../badge/Badge";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p>100.00 ₽</p>
      </div>
      <div className={styles.login}>
        <Badge value={3}/>
        <p>vikavishny</p>
      </div>
      <div className={styles.item}>
        <p>Выйти</p>
      </div>
    </div>
  );
}
