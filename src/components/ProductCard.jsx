import React from "react";
import "./ProductCard.css";

const ProductCard = ({ id, title, image }) => {
  return (
    <div className="product-card__body">
      <img className="product-card__body__image" src={image} />
      <span>{title}</span>
    </div>
  );
};

export default ProductCard;
