import React, { useEffect, useState } from "react";
import Link from "next/link";
import lightLogo from "../../../public/images/icons/logo-light-mode.png";
import darkLogo from "../../../public/images/icons/logo-dark-mode.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import ThemeThoggle from "@/components/utils/global/buttons/ThemeThoggle";

function Header({ children }) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

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
    <>
      <header className="flex">
        <div>
          {theme === "dark" ? (
            <Link href="/">
              <Image
                src={darkLogo}
                alt="Porftolio logo. An E with a dot after it."
              />
            </Link>
          ) : (
            <Link href="/">
              <Image
                src={lightLogo}
                alt="Porftolio logo. An E with a dot after it."
              />
            </Link>
          )}
        </div>
        <nav className="container flex justify-between items-center">
          <ul className="flex ">
            <li>
              <Link href="#prosjekter">Prosjekter</Link>
            </li>
            <li>
              <Link href="#om">Om meg</Link>
            </li>
            <li>
              <Link href="#kontakt">Kontakt</Link>
            </li>
          </ul>
        </nav>
        <ThemeThoggle />
      </header>

      <div className="container">{children}</div>
      {/* <Footer /> */}
    </>
  );
}

export default Header;
