import React from "react";
import Link from "next/link";

function Cta({ link, text, style = "" }) {
  return (
    <Link href={link} className={style}>
      {text}
    </Link>
  );
}

export default Cta;
