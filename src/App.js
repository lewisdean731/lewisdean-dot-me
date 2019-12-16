import React, { Component } from 'react';

import Classes from './App.module.scss';
import Aux from './hoc/Aux';
import SteamWorkshopItem from './components/SteamWorkshop/SteamWorkshopItem/SteamWorkshopItem';
import Landing from './containers/Landing/Landing';

class App extends Component {
  render() {
    return (
      <Aux className={Classes.App}>
        <Landing text={'Welcome'}></Landing>
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
