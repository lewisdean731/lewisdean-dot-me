import React, { Component } from 'react';
import './App.css';
import SteamWorkshopItem from './SteamWorkshopItem/SteamWorkshopItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SteamWorkshopItem
          clickAction='clickAction'
          image={'image'}
          title={'title'}
          summary={'summary'}
          views={'views'}
          subscribers={'subscirbers'}
          favourites={'favourites'}/>
        <SteamWorkshopItem
          clickAction='clickAction'
          image={'image'}
          title={'title'}
          summary={'summary'}
          views={'views'}
          subscribers={'subscirbers'}
          favourites={'favourites'}/>
      </div>

    );
  }
}

export default App;
