import React, { Component } from 'react';

import Classes from './App.module.scss';
import SteamWorkshopItem from './components/SteamWorkshop/SteamWorkshopItem/SteamWorkshopItem';
import Layout from './containers/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Container-fluid>
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
      </Container-fluid>


    );
  }
}

export default App;
