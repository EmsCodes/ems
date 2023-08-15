import styles from "./About.module.scss";
import Heading from "../heading/Heading";

function About() {
  return (
    <section className={styles.about}>
      <Heading size="4">Om meg</Heading>
      <p>
        Jeg heter Endre Makra-Stenkløv og er en nord-norsk frontend-utvikler.
        Oppvokst på Sortland, en liten by i Vesterålen, den mindre kjente naboen
        til Lofoten.
      </p>
      <p>
        I 2019 jobbet jeg som advokatsekretær og medhjelper hos et lokalt
        advokatfirma.
      </p>
    </section>
  );
}

export default About;
