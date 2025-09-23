import React from 'react'
import './card-list.style.css'
import Card from "../card/Card";
import { Monster } from '../../App'

type CardListProps = {
  items: Monster[]
}

const CardList = ({items}: CardListProps) => {
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