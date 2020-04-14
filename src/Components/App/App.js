import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  state = {
    newElement: "",
  };

  componentDidMount() {
    this.props.dispatch({ type: "PUPPY_DOG" });
  }

  handleClick = () => {
    this.props.dispatch({ type: "KITTY_CAT", payload: 15 });
  };

  handleElementChange = (event) => {
    this.setState(
      {
        newElement: event.target.value,
      },
      () => {
        // console.log(this.state);
      }
    );
  };

  submitElement = () => {
    this.props.dispatch({
      type: "ADD_ELEMENT",
      payload: this.state.newElement,
    });
  };

  render() {
    console.log(this.props.reduxState.elementListReducer);

    const htmlArray = this.props.reduxState.elementListReducer.map(
      (item, index) => {
        return <p key={index}>{item}</p>;
      }
    );

    return (
      <div>
        <h1>REDUX!</h1>
        <button onClick={this.handleClick}>DISPATCH BROADCAST!</button>
        <input onChange={this.handleElementChange} />
        <button onClick={this.submitElement}>Submit Element</button>
        {htmlArray}
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(App);
