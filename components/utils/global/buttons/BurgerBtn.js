import React from "react";
import { useEffect, useState } from "react";
import styles from "../buttons/BurgerBtn.module.scss";
import { useTheme } from "next-themes";

function BurgerBtn({ menuFunction }) {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme } = useTheme();

  useEffect(() => {
    //useEffect only run on client side
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  /* a variable which will check the current system preference, 
  or will change the theme based on userpreference 
  when the darkmode/ligtmode button is clicked */
  theme === "system" ? systemTheme : theme;

  return (
    <div className={styles.burgerBtn}>
      <button onClick={menuFunction} aria-label="Open main navigation">
        {/* <div className="bg-primary_gray dark:bg-primary_white;"> */}
        <div
          className={`${styles.one} bg-primary_gray dark:bg-primary_white`}
        ></div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
          <div
            className={`${styles.two} bg-primary_gray dark:bg-primary_white`}
          ></div>
        </div>
        <div
          className={`${styles.three} bg-primary_gray dark:bg-primary_white`}
        ></div>
        {/* </div> */}
      </button>
    </div>
  );
}

export default BurgerBtn;
