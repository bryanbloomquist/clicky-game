import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import ClickItem from "./components/ClickItem";
// import Footer from "./components/Footer";
import ventures from "./ventures.json";

class App extends Component {
  state = { ventures };

  // checkGuess = ( id ) => {

  // }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Container>
          { this.state.ventures.map(( venture ) => (
            <ClickItem 
              id = { venture.id }
              name = { venture.name }
              image = { venture.image }
            />
          ))}
        </Container>
        {/* <Footer /> */}
      </div>
    );
  }

}

export default App;