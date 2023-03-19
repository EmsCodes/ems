import React from "react";

function Heading({ size = 1, style, children }) {
  const VariableHeading = `h${size}`;

  return <VariableHeading className={style}>{children}</VariableHeading>;
}

export default Heading;
