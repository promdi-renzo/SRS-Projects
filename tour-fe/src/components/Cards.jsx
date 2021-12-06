import React from "react";
import Card from "./Card";

const Cards = (props) => {
  return (
    <div className="card-container">
      {props.tours.map((t) => {
        console.log(t.title);
        return <Card key={t.id} tour={t} getAll={props.getAll} />;
      })}
    </div>
  );
};

export default Cards;
