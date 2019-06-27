import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

export class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Hello CodeSandbox</h1>
        </header>
        <main>
          <Button color="success">Tak</Button>
          <Button color="danger">Nie</Button>
        </main>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
