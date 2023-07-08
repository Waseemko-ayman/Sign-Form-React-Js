import React, { Component } from 'react'
import LoginPage from "../LogInPage";
import SignPage from "../SignInPage";

class GamersPage extends Component {
  state = {
    isSignedIn: true
  }

  togglePage = () => {
    this.setState((prevState) => ({
      isSignedIn: !prevState.isSignedIn
    }))
  }

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (<SignPage togglePage={this.togglePage} />) : (<LoginPage togglePage={this.togglePage} />)}
      </div>
    )
  }
}

export default GamersPage;