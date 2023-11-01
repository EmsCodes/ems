import React from "react";
import Image from "next/image";
import styles from "./Technologies.module.scss";
import htmlIcon from "/public/images/icons/html5-logo.svg";
import jsIcon from "/public/images/icons/js-logo.svg";
import bootstrapIcon from "/public/images/icons/bootstrap-logo.svg";
import cssIcon from "/public/images/icons/css-logo.svg";
import sassIcon from "/public/images/icons/sass-logo.svg";
import reactIcon from "/public/images/icons/react-logo.svg";
import nextjsIcon from "/public/images/icons/nextjs-logo.svg";
import strapiIcon from "/public/images/icons/strapi-logo.svg";
import wordpressIcon from "/public/images/icons/wordpress-logo.svg";
import npmIcon from "/public/images/icons/npm-logo.svg";
import adobexdIcon from "/public/images/icons/adobexd-logo.svg";
import { Fade } from "react-awesome-reveal";

function Technologies() {
  return (
    <>
      {/* bg-primary_white border border-primary_gray */}
      <div className="">
        <Fade triggerOnce>
          <Image
            src={htmlIcon}
            alt="orange HTML icon"
            className=""
            title="Html logo"
          />
        </Fade>
      </div>
      <div className="">
        <Fade triggerOnce delay={100}>
          <Image src={jsIcon} alt="orange HTML icon" className="" />
        </Fade>
      </div>

      <div className="">
        <Fade triggerOnce delay={200}>
          <Image src={bootstrapIcon} alt="orange HTML icon" className="" />
        </Fade>
      </div>

      <div className="">
        <Fade triggerOnce delay={300}>
          <Image src={reactIcon} alt="orange HTML icon" className="" />
        </Fade>
      </div>
      <div className="">
        <Fade triggerOnce delay={400}>
          <Image src={cssIcon} alt="orange HTML icon" className="" />
        </Fade>
      </div>
      <div className="">
        <Fade triggerOnce delay={500}>
          <Image src={sassIcon} alt="orange HTML icon" className="" />
        </Fade>
      </div>
      <div className="">
        <Fade triggerOnce delay={600}>
          <Image src={nextjsIcon} alt="orange HTML icon" className="" />
        </Fade>
      </div>

      <div className="">
        <Fade triggerOnce delay={700}>
          <Image src={wordpressIcon} alt="orange HTML icon" className="" />
        </Fade>
      </div>
      <div className="">
        <Fade triggerOnce delay={800}>
          <Image src={strapiIcon} alt="orange HTML icon" className="" />
        </Fade>
      </div>
      <div className="">
        <Fade triggerOnce delay={900}>
          <Image src={npmIcon} alt="orange HTML icon" className="" />
        </Fade>
      </div>
      {/* <div>
        <Image
          src={adobexdIcon}
          alt="orange HTML icon"
          className=""
          height={200}
          width={200}
        />
      </div> */}
    </>
  );
}

export default Technologies;
