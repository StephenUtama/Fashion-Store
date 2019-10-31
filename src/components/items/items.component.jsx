import React from "react";
import "./items.styles.scss";

const Item = ({ title, imageUrl, size }) => (
  <div className={`${size} item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
    </div>
  </div>
);

export default Item;
