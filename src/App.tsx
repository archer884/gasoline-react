import './App.css';
import './Vehicles.tsx';
import * as React from 'react';
import * as Token from './shared/Token';
import Vehicles from './Vehicles';
import VehicleService from './service/VehicleService';

const logo = require('./logo.svg');

class App extends React.Component<AppProps, AppState> {
  constructor() {
    // Useless boilerplate nonsense.
    super({});
    // Real code...
    // this.state = { token: new Token.NullToken() };

    // Test code...
    let tokenValue = 'eyJleHAiOjE1MTgwMjI5MDcsInVpZCI6IjEiLCJ1c3IiOiJhcmNoZXI4ODQifQ'
      + '==.1PxMTmWjEYQ53Xvg4WfA9nDqQik47DSgiQxZBmWsZBA=';
    this.state = { token: new Token.Token(1518022907, tokenValue) };
  }

  render() {
    if (Token.isNullToken(this.state.token)) {
      // You probably need to log in, ok?
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p>You have not logged in, otherwise you'd be seeing vehicles right now.</p>
        </div>  
      );
    } else {
      // I guess we can render your vehicle listing.
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Vehicles service={new VehicleService(this.state.token)} />
        </div>
      );
    }
  }
}

interface AppProps { }

interface AppState {
  token: Token.Token | Token.NullToken;
}

export default App;
