import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import Aux from "./hoc/Aux";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCube)


class App extends Component {
  render() {
    return (
      <Aux>
        <Layout text={"Welcome"}></Layout>
      </Aux>
    );
  }
}

export default App;
