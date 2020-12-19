import React from "react";
import "./card.styles.css";

export const Card = ({ monster, deleteAction }) => {
  return (
    <div className="card-container" onClick={() => deleteAction(monster._id)}>
      <img
        alt="monster"
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};
