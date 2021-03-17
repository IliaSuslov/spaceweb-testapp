import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <div>
        © 2001– 2018 ООО{" "}
        <a className={styles.link} target="_blank" rel="noreferrer noopener"href="https://sweb.ru/">
          «СпейсВэб»
        </a>
        <br />
        Все права защищены.
        <br />
        Лицензия №163230
        <br />
      </div>
      <div className={styles.right}>
        +7 (812) 334-12-22 (в Санкт-Петербурге)
        <br />
        +7 (495) 663-16-12 (в Москве)
        <br />
        (800) 100-16-15 (бесплатно по России)
        <br />
      </div>
    </div>
  );
}

export default Footer;
