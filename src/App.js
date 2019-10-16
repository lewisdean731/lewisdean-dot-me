import React, { Component } from 'react';
import './App.css';
import SteamWorkshopItem from './SteamWorkshopItem/SteamWorkshopItem';

class App extends Component {
  render() {
    return (

      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
        <SteamWorkshopItem
          clickAction='clickAction'
          image={'/logo192.png'}
          title={'title'}
          summary={'summary'}
          views={'views'}
          subscribers={'subscirbers'}
          favourites={'favourites'}/>
        <SteamWorkshopItem
          clickAction='clickAction'
          image={'/logo192.png'}
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
