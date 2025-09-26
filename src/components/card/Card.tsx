import React from "react";
import "./card.style.css";
import { Monster } from "../../App";

type CardProps = {
	item: Monster;
};
const Card = ({ item }: CardProps) => {
	const { id, name, email } = item;
	return (
		<div className="card">
			<img src={`https://robohash.org/${id}?set=set2`} alt={name} />
			<h2 key={id}>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

export default Card;
