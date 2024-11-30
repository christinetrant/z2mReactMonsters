import React from 'react'
import './card-list.style.css'
import Card from "../card/Card";

const CardList = ({items}) => {
  console.log("🚀 ~ CardList ~ items:", items);
  return (
      <div className="card-list">
        {items.map((item, index) => {
          return (
            <Card  key={index} item={item} />
          );
        })}
      </div>
  )
}

export default CardList