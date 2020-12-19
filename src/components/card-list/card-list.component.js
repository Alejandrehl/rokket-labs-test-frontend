import React from "react";
import { Card } from "../card/card.component";

import "./card-list.styles.css";

const CardList = ({ monsters, deleteAction }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card key={monster._id} monster={monster} deleteAction={deleteAction} />
    ))}
  </div>
);

export default CardList;
