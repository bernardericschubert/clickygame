import React, { Component } from 'react';
import Header from './components/header/index';
import Images from './components/images';
import './App.css';
import avengers from "./avengers.json";

class App extends Component {

  state = {
    avengers
  }

  render() {
    return (
      <div>

        <Header />

        <div>
            {this.state.avengers.map(avenger => <Images {...avenger} />)}
        </div>
      </div>
    );
  }

}

export default App;
