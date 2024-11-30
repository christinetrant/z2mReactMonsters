import { Component } from "react";

class CardList extends Component {
  render() {
    const {items} = this.props;
    return (
      <div>
          {items.map((monster) => {
              return <h1 key={monster.id}>{monster.name}</h1>;
          })}
      </div>
    );
  }
}
export default CardList;