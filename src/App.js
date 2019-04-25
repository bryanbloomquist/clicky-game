import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import ClickItem from "./components/ClickItem";
// import Footer from "./components/Footer";
import VenturesJSON from "./ventures.json";

class App extends Component {
  state = { 
    ventures: VenturesJSON,
    score: 0,
    highScore: 0,
    display: "Click on an image to earn points, but don't click on any more than once!"
  };

  gameOver = () => {
    if ( this.state.score > this.state.highScore ) {
      this.setState({ highScore: this.state.score })
    }
    this.state.ventures.forEach(element => {
      element.clicked = false;
    });
    this.setState ({
      score: 0,
      display: "You Guessed Incorrectly! Click on an image to try again.",
    });
  };

  gameWin = () => {
    this.state.ventures.forEach(element => {
      element.clicked = false;
    });
    this.setState ({
      score: 0,
      highScore: 16,
      display: "Perfect Score!",
    });
  };

  checkGuess = ( id ) => {
    console.log( id );
    let guessedVentures = this.state.ventures;
    console.log( guessedVentures );
    let currentScore = this.state.score;
    let guess;

    for ( let i = 0; i < guessedVentures.length; i++ ) {
      if ( guessedVentures[i].id === id ) {
        guess = guessedVentures[i]
        console.log( guess );
      }
    }

    if ( guess.clicked === false ) {
      guess.clicked = true;
      currentScore++;
      if ( currentScore === 16 ) { 
        this.gameWin(); 
      } else {
        this.setState({
          ventures: guessedVentures,
          score: currentScore,
          display: "You Guessed Correctly!"
        })
        this.state.ventures.sort( () => Math.random() - 0.5 )
      }
    } else {
      this.gameOver();
    }
  }

  render() {
    return (
      <div>
        <Navbar 
          display = { this.state.display }          
          score = { this.state.score }
          highScore = { this.state.highScore }
        />
        <Container>
          { this.state.ventures.map(( venture ) => (
            <ClickItem 
              checkGuess = { this.checkGuess }
              clicked = { venture.clicked }
              id = { venture.id }
              image = { venture.image }
              key = { venture.image }
              name = { venture.name }
            />
          ))}
        </Container>
        {/* <Footer /> */}
      </div>
    );
  }

}

export default App;