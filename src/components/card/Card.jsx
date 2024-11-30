import React from 'react'
import './card.style.css'

const Card = ({item}) => {
  const {id, name, email} = item;
  return (
      <div className="card">
              <img src={`https://robohash.org/${id}?set=set2`} alt={name} />
              <h2 key={id}>{name}</h2>
              <p>{email}</p>
            </div>
  )
}

export default Card