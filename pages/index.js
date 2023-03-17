import Head from "@/components/utils/global/head/Head";
import Heading from "@/components/utils/global/heading/Heading";
import styles from "../styles/Home.module.scss";
import Layout from "@/components/layout/sections/Header";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import dots from "../public/images/icons/dots.svg";
import Cta from "@/components/utils/global/buttons/Cta";

export default function Home() {
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
    <Layout>
      <Head title="Home">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="grid place-items-center h-screen">
        <div>
          <h1 className="text-7xl font-bold text-center">
            {currentTheme === "dark" ? "Dark" : "Light"}{" "}
            <span className="dark:text-accent">Mode</span>
          </h1>
          <p className="text-pink my-8 text-center">
            Click the button below to switch mode
          </p>
        </div>
      </div>
      {/* <main className="mode">
        <section>
          <Heading content="Frontend-developer Endre Makra-Stenkløv" />
          <p>Med fokus på design og brukervennlige løsninger</p>
          <Image src={dots} />

          <div className="">
            <Cta link="/test" text="Prosjekter" />
            <Cta link="/test" text="Om meg" />
          </div>
        </section>
      </main> */}
    </Layout>
  );
}
