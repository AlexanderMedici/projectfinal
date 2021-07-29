import React, { Component } from 'react';
import './App.css';
// Add the Route named import
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';



class App extends Component {
  state = {
    user: null
  }
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }
    // when the page refreshes, check localStorage for the user jwt token
  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      // YOU DO: check expiry!
      let userDoc = JSON.parse(atob(token.split('.')[1])).user // decode jwt token
      this.setState({user: userDoc})      
    }
  }


render()  {
  return (
    <main className="App">
<AuthPage setUserInState={this.setUserInState}/>
  
    </main>
      );
    }
}

export default App;
