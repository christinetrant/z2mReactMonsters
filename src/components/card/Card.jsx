import { Component } from "react";
import './card.style.css'

class Card extends Component {
  render() {
    const {id, name, email} = this.props.item;

    return (
      <div className="card">
              <img src={`https://robohash.org/${id}?set=set2`} alt={name} />
              <h2 key={id}>{name}</h2>
              <p>{email}</p>
            </div>
    )
  }
}
export default Card