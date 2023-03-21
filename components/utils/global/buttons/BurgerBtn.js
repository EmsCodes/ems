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
        {theme === "dark" ? (
          <>
            <div className={styles.darkOne}></div>
            <div className={styles.circleContainer}>
              <div className={styles.circle}></div>
              <div className={styles.darkTwo}></div>
            </div>
            <div className={styles.darkThree}></div>
          </>
        ) : (
          <>
            <div className={styles.one}></div>
            <div className={styles.circleContainer}>
              <div className={styles.circle}></div>
              <div className={styles.two}></div>
            </div>
            <div className={styles.three}></div>
          </>
        )}
      </button>
    </div>
  );
}

export default BurgerBtn;
