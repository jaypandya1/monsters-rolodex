import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    //its method to initialize an objects state in a class. it automatically calls during the creation of an object in a  class.
    /*
The constructor in react is called before the component is mounted.
When you implement the constructor for a React Component , you need to call super(props) method before any other statements.

##Syntax : 
Constructor (props) {
  super(props);
}

##Uses of constructors ::
1. It used for initializing the local state of the component by assigning an object to this.state
2. It used for binding event handler methods that occur in your component.

*/
    super();

    this.state = {
      monsters: [{ name: "Lynda" }, { name: "Frank" }, { name: "Jacky" }, {name:"jay"}],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
