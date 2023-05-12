import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
// import styles from "./BurgerIcon.module.scss";

function BurgerIcon(style, lineOne) {
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="26"
      viewBox="0 0 37 26"
      className={style}
    >
      <g id="burger-menu-container" transform="translate(0 1)">
        <g id="burger-menu" data-name="Burger-menu" transform="translate(1)">
          <line
            className={lineOne}
            data-name="Line 1"
            x2="35"
            fill="none"
            stroke={theme === "dark" ? "#ece5d9" : "#000"}
            stroke-linecap="round"
            stroke-width="2"
          />
          <line
            id="2"
            data-name="Line 3"
            x2="35"
            transform="translate(0 24)"
            fill="none"
            stroke={theme === "dark" ? "#ece5d9" : "#000"}
            stroke-linecap="round"
            stroke-width="2"
          />
          <line
            id="3"
            data-name="Line 2"
            x2="26"
            transform="translate(9 12)"
            fill="none"
            stroke={theme === "dark" ? "#ece5d9" : "#000"}
            stroke-linecap="round"
            stroke-width="2"
          />
        </g>
        <path
          id="Icon_awesome-circle"
          data-name="Icon awesome-circle"
          d="M3.544.563A2.981,2.981,0,1,0,6.525,3.544,2.981,2.981,0,0,0,3.544.563Z"
          transform="translate(-0.563 8.456)"
          fill="#e46d5e"
        />
      </g>
    </svg>
  );
}

export default BurgerIcon;
