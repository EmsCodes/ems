import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import moon from "../../../../public/images/icons/moon.svg";
import sun from "../../../../public/images/icons/sun.svg";
import Image from "next/image";
import styles from "../buttons/ThemeToggle.module.scss";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  /* 
  to fix possible hydration mismatch: 
  "This is because we cannot know the theme on the server,
  so it will always be undefined until mounted on the client.
  To fix this, make sure you only render UI that uses the current 
  theme when the page is mounted on the client
  */

  useEffect(() => {
    //useEffect only rund on client side
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  /* a variable which will check the current system preference, 
or will change the theme based on userpreference 
when the darkmode/ligtmode button is clicked */
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="test flex justify-center">
      <div className={styles.btn}>
        <input
          id="darkmode-toggle"
          type="checkbox"
          className="sr-only"
          onClick={() =>
            currentTheme === "dark" ? setTheme("light") : setTheme("dark")
          }
        ></input>
        <label
          for="darkmode-toggle"
          title={theme === "dark" ? "Light theme" : "Dark theme"}
        >
          {/* <Image src={sun} alt="sun icon for light mode" height={30} width={30} /> */}
        </label>
      </div>
      {/* {currentTheme === "dark" ? (
        <button
          id="darkmode-toggle"
          type="checkbox"
          className=""
          title="Light mode"
          onClick={() => setTheme("light")}
        >
          {" "}
          <Image
            src={sun}
            alt="sun icon for light mode"
            height={30}
            width={30}
          />
        </button>
      ) : (
        <button className="" title="Dark mode" onClick={() => setTheme("dark")}>
          <Image
            src={moon}
            alt="moon icon for dark mode"
            height={30}
            width={30}
          />
        </button>
      )} */}
    </div>
  );
}

export default ThemeToggle;
