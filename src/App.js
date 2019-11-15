import React, { Component } from 'react';

import classes from './App.module.css';
import SteamWorkshopItem from './components/SteamWorkshop/SteamWorkshopItem/SteamWorkshopItem';

class App extends Component {
  render() {
    return (

      <div className={classes.App}>
          <SteamWorkshopItem
            clickAction='clickAction'
            image={'imagex'}
            title={'title'}
            summary={'summary'}
            views={'views'}
            subscribers={'subscirbers'}
            favourites={'favourites'}
          />
      </div>

    );
  }
}

export default App;
