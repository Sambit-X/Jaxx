import React from 'react';
import Card from './Card';

function Cardset() {
  return (
    <div className="container text-center">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-2 gy-1">
        {[...Array(8)].map((_, index) => (
          <div className="col" key={index}>
            <div className="p-3"><Card /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardset;
