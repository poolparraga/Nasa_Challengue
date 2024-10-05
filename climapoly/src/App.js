import React, { useState } from 'react';
import Board from './components/Board';
import Dice from './components/Dice';
import Players from './components/Players';
import './App.css'; // Si ya tienes estilos en App.css

function App() {
  // Estado inicial para los jugadores
  const [players, setPlayers] = useState([
    { score: 100, correctAnswers: 1 },
    { score: 100, correctAnswers: 1 },
    { score: 0, correctAnswers: 0 },
    { score: 0, correctAnswers: 0 }
  ]);

  // Función para actualizar los puntos o respuestas de los jugadores
  const updatePlayer = (index, newScore, newCorrectAnswers) => {
    const updatedPlayers = players.map((player, i) =>
      i === index ? { ...player, score: newScore, correctAnswers: newCorrectAnswers } : player
    );
    setPlayers(updatedPlayers);
  };

  return (
    <div className="game-container">
      {/* Tablero */}
      <Board />

      {/* Panel lateral */}
      <div className="side-panel">
        {/* Componente del dado */}
        <Dice />

        {/* Puntajes de los jugadores */}
        <Players players={players} />

        {/* Botón de iniciar juego */}
        <button className="start-
