import React from "react";
import "./card.css";
import Button from "./Button";
function Card({ title, despt, image }) {
  return (
    <>
      <div className="container">
        <div className="card">
          <h4 className="title">{title}</h4>
          <img className="img" src={image} alt="" />
          <p className="despt">{despt}</p>
          <Button text={"Click Me"}/>
          </div>
      </div>
    </>
  );
}

export default Card;
