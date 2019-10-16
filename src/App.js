import React, { Component } from 'react';
import './App.css';
import SteamWorkshopItem from './Components/SteamWorkshopItem/SteamWorkshopItem';

class App extends Component {
  render() {
    return (

      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
      <container>
        <SteamWorkshopItem
          clickAction='clickAction'
          image={'imagex'}
          title={'title'}
          summary={'summary'}
          views={'views'}
          subscribers={'subscirbers'}
          favourites={'favourites'}/>
        <SteamWorkshopItem
          clickAction='clickAction'
          image={'imagex'}
          title={'title'}
          summary={'summary'}
          views={'views'}
          subscribers={'subscirbers'}
          favourites={'favourites'}/>
          </container>
      </div>

    );
  }
}

export default App;
