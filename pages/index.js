import Head from "@/components/utils/global/head/Head";
import Heading from "@/components/utils/global/heading/Heading";
import styles from "../styles/Home.module.scss";
import Layout from "@/components/layout/sections/Header";
import { useRef, useEffect, useState } from "react";
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
import { Fade } from "react-awesome-reveal";

import elementInView from "@/components/hooks/InViewHook";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [windowInnerHeight, setWindowInnerHeight] = useState(0);
  const [windowInnerWidth, setWindowInnerWidth] = useState(0);
  const [element, setElement] = useState();
  const [bottom, setBottom] = useState();
  // const refElement = useRef();
  const options = {
    root: null,
    rootMargin: "200px",
    treshold: [1],
  };

  console.log(element);
  const [ref, isInView] = elementInView(options);
  console.log(ref);

  let slideStyle;

  if (isInView) {
    slideStyle = "slide";
  }
  // else if (scrollY >= 0) {
  //    slideStyle = "slideBack";
  //  }

  // let fadeOut = styles.visible;

  // if (element < 0) {
  //   fadeOut = styles.fade;
  // }

  // const testing = () => {
  //
  // };

  // } else if (!isInView) {
  //   slideStyle = "slideBack";
  // }
  if (!isInView) {
    console.log("NO");
  }

  useEffect(() => {
    //useEffect only run on client side
    setMounted(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setWindowInnerHeight(window.innerHeight);
      setWindowInnerWidth(window.innerWidth);
      setBottom(ref.current?.getBoundingClientRect().right);
      setElement(ref.current?.getBoundingClientRect().width);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
          <div
            className={styles.portraitContainer}
            ref={ref}
            // style={{
            //   left: isInView ? scrollY - + "px" : "",
            //   // top: isInView ? scrollY + "px" : "",
            // }}
          >
            <div>
              <div className={`${styles.portrait} ${slideStyle}`}>
                <Image
                  src={portrait}
                  className={styles.portrait}
                  loading="eager"
                  alt="text"
                />
              </div>
            </div>
          </div>
          <div className={styles.tjenester}>
            <div>
              <Fade direction="left" triggerOnce fraction=".6" delay={250}>
                <Image src={dots} aria-hidden="true" />
              </Fade>
              <Fade triggerOnce fraction="1" delay={250}>
                <p>Utvikling</p>
              </Fade>
            </div>
            <div>
              <Fade triggerOnce fraction="1" delay={250}>
                <p>Webdesign</p>
              </Fade>
              <Fade direction="right" triggerOnce fraction="1" delay={250}>
                <Image src={dots} aria-hidden="true" />
              </Fade>
            </div>
            <div>
              <Fade direction="left" triggerOnce fraction="1" delay={250}>
                <Image src={dots} aria-hidden="true" />
              </Fade>
              <Fade triggerOnce fraction="1" delay={250}>
                <p>UX/UI</p>
              </Fade>
            </div>
            <div>
              <Fade triggerOnce fraction="1">
                <p>Tilgjengelighet/WCAG</p>
              </Fade>
              <Fade direction="right" fraction="1" triggerOnce delay={250}>
                <Image src={dots} aria-hidden="true" />
              </Fade>
            </div>
          </div>
        </section>
        <div>
          <section className={styles.skillsSection}>
            <Heading size="2" style={styles.h2}>
              Ferdigheter<span className="text-accent">.</span>
            </Heading>
            <Fade triggerOnce fraction=".9" delay={200}>
              <p>
                Jeg har gjennom en høyere fagskolegrad hos Noroff - School of
                technology and digital media, og ved selvstudier, tilegnet meg
                god kunnskap om sentrale frontend teknologier og emner. Blant
                annet UX/UI, WCAG/brukervennlighet, interaksjonsdesign og
                design.
              </p>
            </Fade>
            <div className={styles.technologies}>
              <Technologies />
            </div>
          </section>
          <section
            id="prosjekter"
            className={`${styles.carousel} bg-primary_white dark:bg-primary_gray`}
          >
            <Heading
              size="3"
              style={`${styles.h3} text-primary_gray dark:text-accent`}
            >
              Portfolio<span className="text-accent dark:text-white">.</span>
            </Heading>
            {/* <p>Noen av mine prosjekter</p> */}
            <Carousel />
          </section>
          <section>
            <About />
          </section>
        </div>
      </main>
    </Layout>
  );
}
