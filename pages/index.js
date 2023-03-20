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
  theme === "system" ? systemTheme : theme;

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
      <main>
        <div className=" bg-primaryWhite dark:bg-gray w-screen">
          <section className={styles.mainSection}>
            <Heading style="font-serif flex-row">
              <span className="text-accent">Frontend-Developer</span>
              <span className="font-black">Endre Makra-Stenkløv</span>
            </Heading>
            <p>
              Med fokus på design og brukervennlighet
              <span className="text-accent">.</span>
            </p>
            <div className="">
              <p className={styles.services}></p>
              <Image src={dots} aria-hidden="true" />
            </div>
            <div className={styles.ctaContainer}>
              <Cta link="/test" text="Prosjekter" style="primaryCta" />
              <Cta link="/test" text="Om meg" style="secondaryCta" />
            </div>
            <div></div>
          </section>
        </div>
        <section></section>
      </main>
    </Layout>
  );
}
