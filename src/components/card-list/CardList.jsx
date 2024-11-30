import { Component } from "react";
import './card-list.style.css'

import Card from "../card/Card";
class CardList extends Component {
  render() {
    const {items} = this.props;
    return (
      <div className="card-list">
        {items.map((item, index) => {
          return (
            <Card  key={index} item={item} />
          );
        })}
      </div>
    );
  }
}
export default CardList;