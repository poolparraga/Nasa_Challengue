import React from 'react';
import Tile from './Tile'; // Asegúrate de tener Tile correctamente importado
import './Board.css'; // Crea un archivo CSS para los estilos del tablero

const Board = () => {
  return (
    <div className="board">
      <Tile type="start">GO!</Tile>
      <Tile type="green"></Tile>
      <Tile type="yellow"></Tile>
      <Tile type="green"></Tile>
      <Tile type="yellow"></Tile>
      {/* Puedes seguir agregando más Tiles */}
    </div>
  );
};

export default Board;
