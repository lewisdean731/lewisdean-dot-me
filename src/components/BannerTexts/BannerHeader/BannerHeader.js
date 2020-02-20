import React from "react";
import Classes from "./BannerHeader.module.scss";

const BannerHeader = props => {
  return (
    <h1 className={[Classes.Title, Classes.Box].join(" ")}>{props.text}</h1>
  );
};

export default BannerHeader;
