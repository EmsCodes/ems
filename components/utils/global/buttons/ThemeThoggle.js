import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import moon from "../../../../public/images/icons/moon.svg";
import sun from "../../../../public/images/icons/sun.svg";
import Image from "next/image";

function ThemeThoggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  /* 
  to fix possible hydration mismatch: 
  "This is because we cannot know the theme on the server,
  so it will always be undefined until mounted on the client.
  TO fix this, make sure you only render UI that uses the current 
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
    <div className="flex justify-center">
      {currentTheme === "dark" ? (
        <button
          className="bg-black-700 hover:bg-accent w-20 rounded-md border-purple-400 border-2 p-4 flex justify-center"
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
        <button
          className="bg-gray-100 w-20 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300 flex justify-center"
          onClick={() => setTheme("dark")}
        >
          <Image
            src={moon}
            alt="moon icon for dark mode"
            height={30}
            width={30}
          />
        </button>
      )}
    </div>
  );
}

export default ThemeThoggle;
