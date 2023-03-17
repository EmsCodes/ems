import React from "react";
import Link from "next/link";

function Cta({ link, text, style = "" }) {
  return (
    <Link href={link} legacyBehavior>
      <a className={style}>{text}</a>
    </Link>
  );
}

export default Cta;
