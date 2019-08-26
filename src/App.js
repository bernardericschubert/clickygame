import React, { Component } from 'react';
import Header from './components/header/index';
import Images from './components/images';
import './App.css';
import avengers from './avengers.json';
import Wrapper from './components/wrapper';

function randomArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

  state = {
    avengers,
    score: 0,
    highScore: 0,
    guesses: [],
    message: ""
  };

  imageClick = id => {
    if (this.state.guesses.includes(id)) {
      this.setState({
        guesses: [],
        score: 0,
        message: "Sorry, that was incorrect!  Reshuffling images."
      });
      console.log(this.state.score)
      this.makeImagesRandom()
    } else if (this.state.score === 9) {
      this.setState({
        guesses: [],
        score: 0,
        message: "Great job!  You got them all right!!"
      });
      console.log(this.state.score)
      this.makeImagesRandom()
    } else {
      this.setState({
        guesses: this.state.guesses.concat(id),
        score: this.state.score + 1,
        message: "Correct.  I love you 3000! Let's keep going."
      });
      console.log(this.state.score)
      this.makeImagesRandom()
    };
  };

  makeImagesRandom = () => {
    let random = randomArray(avengers);
    this.setState({ avengers: random });
  };

  render() {
    return (
      <Wrapper>
        <Header 
          score={this.state.score}
          message={this.state.message}
        />
        <div id="image-area">
          {this.state.avengers.map(avenger => <Images {...avenger} imageClick={this.imageClick} />)}
        </div>
      </Wrapper>
    );
  };

}

export default App;
