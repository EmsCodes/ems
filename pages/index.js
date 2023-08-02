import Head from "@/components/utils/global/head/Head";
import Heading from "@/components/utils/global/heading/Heading";
import styles from "../styles/Home.module.scss";
import Layout from "@/components/layout/sections/Header";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import dots from "../public/images/icons/dots.svg";
import Cta from "@/components/utils/global/buttons/Cta";
import Technologies from "@/components/utils/global/elements/Technologies";
import eLetter from "../public/images/images/letter-e.svg";
import Carousel from "@/components/utils/global/elements/Carousel";
import circle from "../public/images/images/sirkel.png";
import portrait from "../public/images/images/portrett.png";
import About from "@/components/utils/global/elements/About";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme } = useTheme();

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
        <section className={styles.mainSection}>
          <Heading style="font-serif flex-row">
            <span className="text-accent">Frontend-utvikler</span>
            <span className="font-black">Endre Makra-Stenkløv</span>
          </Heading>
          <Image
            className={styles.e}
            src={eLetter}
            aria-hidden="true"
            alt="Stor e-bokstav i bakgrunnen av nettsiden"
          />
          <div className={styles.dotContainer}>
            <Image src={dots} aria-hidden="true" />
            {/* <p className={styles.services}>
              <span className="text-accent">.</span>
            </p> */}
          </div>
          <div className={styles.ctaContainer}>
            <Cta link="/test" text="Prosjekter" style="primaryCta" />
            <Cta link="/test" text="Om meg" style="secondaryCta" />
          </div>
          <div className={styles.portrait}>
            <Image src={portrait} className={styles.portrait} />
          </div>
        </section>
        <section className={styles.skillsSection}>
          <Heading size="2" style={styles.h2}>
            Ferdigheter<span className="text-accent">.</span>
          </Heading>
          <p>
            Jeg har gjennom en høyere fagskolegrad hos Noroff - School of
            technology and digital media, og ved selvstudier, tilegnet meg god
            kunnskap om sentrale frontend teknologier og emner. Blant annet
            UX/UI, WCAG/brukervennlighet, interaksjonsdesign og design.
          </p>
          <div className={styles.technologies}>
            <Technologies />
          </div>
        </section>
        <section className={styles.carousel}>
          <Heading
            size="3"
            style={`${styles.h3} text-primary_gray dark:text-accent`}
          >
            Portfolio<span className="text-accent dark:text-white">.</span>
          </Heading>
          {/* <p>Noen av mine prosjekter</p> */}
          <Carousel />
        </section>
        <About />
      </main>
    </Layout>
  );
}
