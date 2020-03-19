import React from "react";
import Classes from "./TextParagraph.module.scss";

const TextSubheader = props => {
  const className = props.FullWidth
    ? [Classes.TextSubheader, Classes.FullWidth]
    : [Classes.TextSubheader];

  return (
    <div>
      <p className={className.join(" ")}>{props.children}</p>
    </div>
  );
};

export default TextSubheader;
