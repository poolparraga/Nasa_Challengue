const players = [
    { id: 1, name: 'Jugador 1', color: 'red', position: 0, score: 0, correctAnswers: 0 },
    { id: 2, name: 'Jugador 2', color: 'blue', position: 0, score: 0, correctAnswers: 0 }
  ];
  
  let currentPlayer = 0;
  let diceValue = null;
  
  const questions = [
    {
      question: "¿Qué es una sequía?",
      options: [
        "Un aumento en la cantidad de agua en los ríos",
        "Un período prolongado de escasez de agua",
        "Un fenómeno que causa inundaciones",
        "Un tipo de tormenta"
      ],
      correct: 1
    },
    {
      question: "¿Qué fenómeno puede ser resultado del cambio climático?",
      options: [
        "Sequías severas",
        "Disminución de la evaporación",
        "Menos tormentas",
        "Ninguna de las anteriores"
      ],
      correct: 0
    }
  ];
  
  const diceElement = document.getElementById('dice');
  const rollDiceButton = document.getElementById('rollDiceButton');
  const playersContainer = document.getElementById('players');
  const board = document.getElementById('board');
  const questionContainer = document.getElementById('questionContainer');
  
  // Función para lanzar el dado
  function rollDice() {
    diceValue = Math.floor(Math.random() * 6) + 1;
    diceElement.innerText = diceValue;
    movePlayer(diceValue);
  }
  
  // Función para mover al jugador
  function movePlayer(spaces) {
    const player = players[currentPlayer];
    player.position = (player.position + spaces) % 24; // Suponiendo 24 espacios
    showQuestion();
  }
  
  // Función para mostrar una pregunta
  function showQuestion() {
    const question = questions[Math.floor(Math.random() * questions.length)];
    let questionHtml = `<h3>${question.question}</h3><ul>`;
    question.options.forEach((option, index) => {
      questionHtml += `<li><button onclick="handleAnswer(${index}, ${question.correct})">${option}</button></li>`;
    });
    questionHtml += `</ul>`;
    questionContainer.innerHTML = questionHtml;
    questionContainer.style.display = 'block';
  }
  
  // Función para manejar la respuesta
  function handleAnswer(selectedOption, correctOption) {
    if (selectedOption === correctOption) {
      players[currentPlayer].score += 50;
    }
    questionContainer.style.display = 'none';
    nextTurn();
  }
  
  // Cambiar al siguiente turno
  function nextTurn() {
    currentPlayer = (currentPlayer + 1) % players.length;
  }
  
  // Renderizar los jugadores en la pantalla
  function renderPlayers() {
    playersContainer.innerHTML = '';
    players.forEach(player => {
      const playerHtml = `<div>${player.name} - Puntuación: ${player.score}</div>`;
      playersContainer.innerHTML += playerHtml;
    });
  }
  
  // Renderizar el tablero
  function renderBoard() {
    for (let i = 0; i < 24; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.innerText = i === 0 ? 'GO!' : i;
      board.appendChild(square);
    }
  }
  
  rollDiceButton.addEventListener('click', rollDice);
  
  renderPlayers();
  renderBoard();
  