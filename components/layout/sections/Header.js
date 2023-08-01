import React, { useEffect, useState } from "react";
import Link from "next/link";
import lightLogo from "../../../public/images/icons/logo-light-mode.png";
import darkLogo from "../../../public/images/images/new-logo.svg";
import Image from "next/image";
import { useTheme } from "next-themes";
import ThemeToggle from "@/components/utils/global/buttons/ThemeThoggle";
import styles from "../sections/Header.module.scss";
import BurgerBtn from "@/components/utils/global/buttons/BurgerBtn";
import BurgerIcon from "@/components/utils/global/buttons/BurgerIcon";

function Header({ children }) {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme } = useTheme();
  const [burgerMenu, setBurgerMenu] = useState(styles.burgerBtnContainer);

  const [menuState, setMenuState] = useState(styles.hideMenu);

  useEffect(() => {
    //useEffect only run on client side
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function menuFunction() {
    if (menuState === styles.hideMenu) {
      setMenuState(styles.showMenu);
    } else {
      setMenuState(styles.hideMenu);
    }
  }

  console.log(theme);

  /* a variable which will check the current system preference, 
or will change the theme based on userpreference 
when the darkmode/ligtmode button is clicked */
  theme === "system" ? systemTheme : theme;

  return (
    <>
      <header className={styles.header}>
        <div className="logo">
          {theme === "dark" ? (
            <Link href="/">
              <Image
                src={darkLogo}
                alt="Porftolio logo.En hvit E med en lakserosa dott/punktum."
              />
            </Link>
          ) : (
            <Link href="/">
              <Image
                src={lightLogo}
                alt="Porftolio logo. En mørk E med en lakserosa dott/punktum."
              />
            </Link>
          )}
        </div>
        <div className={burgerMenu}>
          {/* <button onClick={menuFunction}>
            {/* <BurgerIcon style={styles.burger} lineOne={styles.lineOne} /> */}
          {/* </button> */}
          <BurgerBtn menuFunction={menuFunction} />
          <ThemeToggle />
        </div>
        <div className={menuState}>
          <nav
            role="navigation"
            aria-label="main navigation"
            // aria-expanded="true"
          >
            <ul className="font-serif">
              <li className="">
                <Link href="#prosjekter">
                  Prosjekter<span className="text-accent">.</span>
                </Link>
              </li>
              <li>
                <Link href="#om">
                  Om meg<span className="text-accent">.</span>
                </Link>
              </li>
              <li>
                <Link href="#kontakt">
                  Kontakt<span className="text-accent">.</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container">{children}</div>
      {/* <Footer /> */}
    </>
  );
}

export default Header;

// const [menuBtn, setMenuBtn] = useState(faBars);
