import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCube, faTools, faUser, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCube, faTools, faUser, faExclamationTriangle);

class App extends Component {
  render() {
    return <Layout></Layout>;
  }
}

export default App;
