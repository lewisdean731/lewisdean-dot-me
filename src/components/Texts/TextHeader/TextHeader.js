import React from "react";
import Classes from "./TextHeader.module.scss";

const TextHeader = props => {
  return (
    <div>
      <p className={Classes.TextSubheader}>{props.children}</p>
    </div>
  );
};

export default TextHeader;
