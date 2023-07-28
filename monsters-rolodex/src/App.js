import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      Searchfield: ''
    };
    console.log("component");
  }

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

  //Fetching the API

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(
        (users) =>
          this.setState(() => {
            return { monsters: users };
          }),
        () => {
          console.log(this.state);
        }
      );
    console.log("componentdidmount");
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.Searchfield);
      
    });
    console.log("render");
    return (
    
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            console.log(event.target.value);
     const Searchfield = event.target.value.toLowerCase();
          

            this.setState(() => {
              
              return { Searchfield};
            });
          }}
        />
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
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
