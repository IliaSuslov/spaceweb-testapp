import React, { useEffect, useState } from "react";
import { parseString } from "xml2js";
import * as FaIcons from "react-icons/fa";

import styles from "./Journal.module.css";

export default function Journal() {
  const [active, setActive] = useState(-1);
  const [data, setData] = useState({});
  const getData = async () => {
    const url = "https://sweb.ru/export/turbojournal/";
    const response = await fetch(url);
    const text = await response.text();
    parseString(text, (err, result) => {
      setData(result);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const articles = data.rss;
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Бортовой журнал</h3>
      <h1 className={styles.h1}>Бортовой журнал</h1>
      <div className={styles.articles}>
        {articles &&
          articles.channel.map((v, i) => {
            return (
              <div key={`article-${i}`}>
                <ul className={styles.ul}>
                  {v.item.map((list, i) => {
                    return (
                      <li
                        key={`list-${i}`}
                        className={styles.li}
                        onClick={() => {
                          active !== i ? setActive(i) : setActive(-1);
                        }}
                      >
                        {list.title}
                        <div className={styles.licon}>
                          {active !== i ? (
                            <FaIcons.FaChevronDown
                              className={styles.icon}
                              onClick={() => setActive(i)}
                            />
                          ) : (
                            <FaIcons.FaChevronUp
                              className={styles.icon}
                              onClick={() => setActive(-1)}
                            />
                          )}
                        </div>
                        <div>
                          {active === i ? (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: list["turbo:content"],
                              }}
                            />
                          ) : null}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
}
