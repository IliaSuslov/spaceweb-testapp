import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuData from "./MenuData";
import SW from "../../assets/icons/sweb.png";

import styles from "./Menu.module.css";

const Menu = () => {
  const [active, setActive] = useState(-1);
  return (
    <div className={styles.menu}>
      <img className={styles.image} src={SW} alt="SW"></img>
      <ul className={styles.ulist}>
        {MenuData.map((item, i) => {
          return (
            <li
              key={i}
              className={active !== i ? styles.link : styles.link_active}
              onClick={() => setActive(i)}
            >
              <div className={styles.title}>
                <Link className={styles.icon} to={item.path}>
                  {item.icon}
                  <span className={styles.text}>{item.title}</span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;

// className={active ? styles.link : styles.link_active}
// onClick={() => setActive(!active)}
