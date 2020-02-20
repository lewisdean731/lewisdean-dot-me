import React from "react";
import Classes from "./TextParagraph.module.scss";

const TextSubheader = props => {
  return (
    <div>
      <p className={Classes.TextSubheader}>{props.children}</p>
    </div>
  );
};

export default TextSubheader;
