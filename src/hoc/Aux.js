import React from "react";
import Classes from "../App.module.scss";

const Aux = props => {
  return (
    <Container-fluid class={Classes.Flex}>{props.children}</Container-fluid>
  );
};

export default Aux;
