// components/Card.js
import React from 'react';

const Card = ({ title, text, imageUrl, altText }) => {
  return (
    <div className="card">
      <img src="https://placehold.co/400x600" className="card-img-top img-fluid" alt={altText} style={{ maxWidth: '450px', maxHeight: '650px', width: '100%', height: 'auto' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
  );
};

export default Card;
