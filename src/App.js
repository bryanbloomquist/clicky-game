import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import ClickItem from "./components/ClickItem";
import Footer from "./components/Footer";
import VenturesJSON from "./ventures.json";

class App extends Component {
  state = {
    divStyle: "#ddd",
    ventures: VenturesJSON,
    score: 0,
    highScore: 0,
    display: "Click any image to begin, but don't click the same image more than once."
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
      divStyle: "#f00"
    });
  };

  gameWin = () => {
    this.state.ventures.forEach(element => {
      element.clicked = false;
    });
    this.setState ({
      score: 0,
      highScore: 12,
      display: "Perfect Score!",
    });
  };

  checkGuess = ( id ) => {
    let guessedVentures = this.state.ventures;
    let currentScore = this.state.score;
    let guess;

    for ( let i = 0; i < guessedVentures.length; i++ ) {
      if ( guessedVentures[i].id === id ) {
        guess = guessedVentures[i]
      }
    }

    if ( guess.clicked === false ) {
      this.setState({ divStyle: "#0fa" });
      guess.clicked = true;
      currentScore++;
      if ( currentScore === 12 ) { 
        this.gameWin(); 
      } else {
        this.setState({
          ventures: guessedVentures,
          score: currentScore,
          display: "You Guessed Correctly!"
        })
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
          divStyle = { this.state.divStyle }
        />
        <Container>
          { this.state.ventures.sort( () => Math.random() - 0.5 ).map(( venture ) => (
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
        <Footer />
      </div>
    );
  }

}

export default App;