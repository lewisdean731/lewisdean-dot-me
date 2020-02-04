import React, { Component } from 'react';
import SteamWorkshopItem from './components/SteamWorkshop/SteamWorkshopItem/SteamWorkshopItem';
import Layout from './containers/Layout/Layout';
import Aux from './hoc/Aux';

class App extends Component {
  render() {
    return (
      <Aux>
          <Layout text={'Welcome'}></Layout>
        <SteamWorkshopItem
          clickAction='clickAction'
          image={'imagex'}
          title={'title'}
          summary={'summary'}
          views={'views'}
          subscribers={'subscirbers'}
          favourites={'favourites'}
        />
      </Aux>
    );
  }
}

export default App;
