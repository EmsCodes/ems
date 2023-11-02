import React from "react";
import { Fade } from "react-awesome-reveal";

function Heading({ size = 1, style, children }) {
  const VariableHeading = `h${size}`;

  return <VariableHeading className={style}>{children}</VariableHeading>;
}

export default Heading;
