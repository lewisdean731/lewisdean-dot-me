import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import Aux from './hoc/Aux';

class App extends Component {
  render() {
    return (
      <Aux>
          <Layout text={'Welcome'}></Layout>
      </Aux>
    );
  }
}

export default App;
