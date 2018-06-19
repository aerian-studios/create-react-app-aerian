import * as React from "react";
import "./App.css";

import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Use <code>hygen component new --name MySFCComponent</code> to make a
          new Stateless function component (default/preferred), or
          <code>hygen component new --class --name MyClassComponent</code> to
          make a Class based component. See http://www.hygen.io/ and
          https://github.com/aerian-studios/hygen-react-typescript for more
          info.
        </p>
      </div>
    );
  }
}

export default App;
