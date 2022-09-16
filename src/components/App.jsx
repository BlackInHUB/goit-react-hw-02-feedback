import React from "react";
import {Feedback} from './Feedback/Feedback'

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleBtnClick = (event) => {
    const tartgetBtnName = event.target.name;

    this.setState(prevState => ({
      [tartgetBtnName]: prevState[tartgetBtnName] + 1
    }))
  }

  render() {
    return (
      <Feedback values={this.state} onClick={this.handleBtnClick} />
    )
  }
};

export default App;