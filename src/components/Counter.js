import React from "react";

class Counter extends React.Component {
  state = { score: 0 };
  handleIncrement = () => { 
    this.setState({ score: this.state.score + 1 });
  };
}

export default Counter;