import styles from "./About.module.scss";
import Heading from "../heading/Heading";

function About() {
  return (
    <section className={styles.about}>
      <Heading size="4">Om meg</Heading>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et.
      </p>
    </section>
  );
}

export default About;
