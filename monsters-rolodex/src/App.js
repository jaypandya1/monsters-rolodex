import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "dada",
      company:'qwe'
    };
  }
  render() {
    return (
      <div className="App">
        <p>Hello {this.state.name} , I want to be {this.state.company}</p>
        <button onClick={() => this.setState({ name: "jay" })}>
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
