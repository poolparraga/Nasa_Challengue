import React from 'react';

const Players = ({ players }) => {
  return (
    <div className="players">
      {players.map((player, index) => (
        <div key={index}>
          {`Player ${index + 1}: ${player.score} pts (${player.correctAnswers} correct answers)`}
        </div>
      ))}
    </div>
  );
};

export default Players;
