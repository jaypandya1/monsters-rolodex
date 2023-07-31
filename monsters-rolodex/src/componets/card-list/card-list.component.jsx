import { Component } from "react";

import './card-list.style.css';
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log(this.props);
    return (
      <div className="Card-List">
        {monsters.map((monster) => {
            const {name,email,id } = monster;
        return (
          <div className="card-container" key={monster.id}>
            <img
              alt={`monster ${monster.name}`}
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />

            <h2 key={id}>{name}</h2>
            <p>{email}</p>
          </div>

        )})}

      </div>
    );
  }
}
export default CardList;

//React rerender when setState and props change
