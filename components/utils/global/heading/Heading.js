import React from "react";

function Heading({ size = 1, content, style }) {
  const VariableHeading = `h${size}`;

  return <VariableHeading className={style}>{content}</VariableHeading>;
}

export default Heading;
