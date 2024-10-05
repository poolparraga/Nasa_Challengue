import React from 'react';
import './Tile.css';

const Tile = ({ type, children }) => {
  return (
    <div className={`tile ${type}`}>
      {children}
    </div>
  );
};

export default Tile;
