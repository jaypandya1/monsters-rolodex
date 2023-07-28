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
      monsters: [{ name: "Lynda", id: 1234 }, { name: "Frank", id: 3522 }, { name: "Jacky",id: 21232 }, {name:"jay" , id: 242343}],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>; //Key Properties: 
          //most of the time key would be unique id ,

        })}
      </div>
    );
  }
}

export default App;

/*
map()

will use to modify arr 

exp: 

const myArray = [1,2,3,4]

myArray.map( e  => {   return e + 1     }       )


will add 1 in each element of myArray



*/