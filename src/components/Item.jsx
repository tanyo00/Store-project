import React from "react";

export default function Item(props) {
  return (
    <div className="item-container">
      <img
        className="imageItem"
        alt="images"
        src={props.image}
        width="10%"
        height="90%"
        style={{ padding: "20px" }}
      />
      <h2 className="brand">{props.brand}</h2>
      <p className="type">{props.type}</p>
      <p className="size">size: {props.size}</p>
      <p className="price">
        <b>{props.price}</b>
      </p>
    </div>
  );
}
