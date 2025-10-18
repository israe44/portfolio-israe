import React, { useState, useEffect } from 'react';
import { FaGamepad, FaCalculator, FaChess, FaBrain, FaQuestionCircle } from 'react-icons/fa';
import './Games.css';

const Games = () => {
  const [activeGame, setActiveGame] = useState('calculator');

  const games = [
    { id: 'calculator', name: 'Calculator', icon: FaCalculator, description: 'A fully functional calculator with basic arithmetic operations' },
    { id: 'tictactoe', name: 'Tic-Tac-Toe', icon: FaChess, description: 'Classic X and O game with win detection' },
    { id: 'memory', name: 'Memory Game', icon: FaBrain, description: 'Test your memory by matching pairs of cards' },
    { id: 'quiz', name: 'Quiz Game', icon: FaQuestionCircle, description: 'Test your knowledge with this interactive quiz' },
  ];

  const renderGame = () => {
    switch (activeGame) {
      case 'calculator':
        return <CalculatorGame />;
      case 'tictactoe':
        return <TicTacToeGame />;
      case 'memory':
        return <MemoryGame />;
      case 'quiz':
        return <QuizGame />;
      default:
        return <CalculatorGame />;
    }
  };

  return (
    <div className="games page">
      <div className="container">
        <h1 className="page-title">Interactive Games</h1>
        <p className="page-subtitle">A collection of mini-games and tools built with React</p>
        
        <div className="games-container">
          <div className="games-sidebar">
            <div className="games-list">
              {games.map(game => (
                <button
                  key={game.id}
                  className={`game-tab ${activeGame === game.id ? 'active' : ''}`}
                  onClick={() => setActiveGame(game.id)}
                >
                  <game.icon className="game-tab-icon" />
                  <span>{game.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="game-display">
            <div className="game-header">
              <h2 className="game-title">
                {games.find(g => g.id === activeGame)?.name}
              </h2>
              <p className="game-description">
                {games.find(g => g.id === activeGame)?.description}
              </p>
            </div>
            
            <div className="game-content">
              {renderGame()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CALCULATOR GAME - Fully Functional
const CalculatorGame = () => {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setCurrentValue(String(num));
      setWaitingForOperand(false);
    } else {
      const newValue = display === '0' ? String(num) : display + num;
      setDisplay(newValue);
      setCurrentValue(newValue);
    }
  };

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setCurrentValue('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
      setCurrentValue(display + '.');
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(currentValue);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setCurrentValue(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (a, b, op) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      default: return b;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(currentValue);

    if (operator && previousValue !== null) {
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setCurrentValue(String(result));
      setPreviousValue(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setCurrentValue('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  return (
    <div className="calculator-game">
      <div className="calculator">
        <div className="calculator-display">{display}</div>
        <div className="calculator-buttons">
          <button className="calc-btn" onClick={() => handleNumber(7)}>7</button>
          <button className="calc-btn" onClick={() => handleNumber(8)}>8</button>
          <button className="calc-btn" onClick={() => handleNumber(9)}>9</button>
          <button className="calc-btn operator" onClick={() => handleOperator('/')}>/</button>
          <button className="calc-btn" onClick={() => handleNumber(4)}>4</button>
          <button className="calc-btn" onClick={() => handleNumber(5)}>5</button>
          <button className="calc-btn" onClick={() => handleNumber(6)}>6</button>
          <button className="calc-btn operator" onClick={() => handleOperator('*')}>*</button>
          <button className="calc-btn" onClick={() => handleNumber(1)}>1</button>
          <button className="calc-btn" onClick={() => handleNumber(2)}>2</button>
          <button className="calc-btn" onClick={() => handleNumber(3)}>3</button>
          <button className="calc-btn operator" onClick={() => handleOperator('-')}>-</button>
          <button className="calc-btn" onClick={() => handleNumber(0)}>0</button>
          <button className="calc-btn" onClick={handleDecimal}>.</button>
          <button className="calc-btn equals" onClick={handleEquals}>=</button>
          <button className="calc-btn operator" onClick={() => handleOperator('+')}>+</button>
        </div>
        <button className="calc-btn clear" onClick={handleClear} style={{width: '100%', marginTop: '10px'}}>C</button>
      </div>
    </div>
  );
};

// TIC-TAC-TOE GAME - Fully Functional
const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    
    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setIsXNext(!isXNext);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const isBoardFull = board.every(cell => cell !== null);

  return (
    <div className="tic-tac-toe-game">
      <div className="tic-tac-toe-board">
        {board.map((value, index) => (
          <button 
            key={index} 
            className="tile"
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="game-status">
        {winner ? `Winner: ${winner}!` : isBoardFull ? "It's a Draw!" : `Player ${isXNext ? 'X' : 'O'}'s turn`}
      </div>
      <button onClick={resetGame} style={{marginTop: '20px', padding: '10px 20px', cursor: 'pointer'}}>Reset Game</button>
    </div>
  );
};

// MEMORY GAME - Fully Functional
const MemoryGame = () => {
  const emojis = ['🎮', '🎯', '🎲', '🎪', '🎨', '🎭', '🎬', '🎸'];
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffled = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji }));
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlipped;
      
      if (cards[first].emoji === cards[second].emoji) {
        setMatched([...matched, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="memory-game">
      <div className="memory-board">
        {cards.map((card, index) => (
          <div 
            key={card.id} 
            className={`memory-card ${flipped.includes(index) || matched.includes(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-front">?</div>
            <div className="card-back">{card.emoji}</div>
          </div>
        ))}
      </div>
      <div className="game-status">
        Matches: {matched.length / 2}/8 | Moves: {moves}
      </div>
      <button onClick={initializeGame} style={{marginTop: '20px', padding: '10px 20px', cursor: 'pointer'}}>New Game</button>
    </div>
  );
};

// QUIZ GAME - Fully Functional
const QuizGame = () => {
  const questions = [
    {
      question: "What does a Full Stack Developer do?",
      options: ["Creates mobile apps only", "Manages computer networks", "Works on both front-end and back-end", "Only designs websites"],
      correct: 1
    },
    {
      question: "What is an algorithm?",
      options: ["A programming language", "A set of logical steps to solve a problem", "A software tool", "A hardware device"],
      correct: 1
    },
    {
      question: "What is 'localhost' commonly used for?",
      options: ["Testing websites on a local server",
        "Accessing the internet",
        "Hosting a public website",
        "Connecting to a remote database"],
      correct: 0
    },
    {
      question: "Which of the following is true about Python?",
      options: ["Its a low-level language",
        "It cannot be used for web development",
        "It emphasizes readability and simplicity",
        "It is only used for mobile apps"],
      correct: 3
    },
    {
      question: "Which of the following is used in JavaScript to declare a variable?",
      options: ["var", "let", "const", "All of the above"],
      correct: 3
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  if (showResult) {
    return (
      <div className="quiz-game">
        <div className="quiz-result">
          <h2>Quiz Complete!</h2>
          <p>Your Score: {score}/{questions.length}</p>
          <p>{score === questions.length ? "Perfect! 🎉" : score >= 3 ? "Great job! 👍" : "Keep practicing! 💪"}</p>
          <button onClick={resetQuiz} style={{marginTop: '20px', padding: '10px 20px', cursor: 'pointer'}}>Play Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-game">
      <div className="quiz-question">
        {questions[currentQuestion].question}
      </div>
      <div className="quiz-options">
        {questions[currentQuestion].options.map((option, index) => (
          <button 
            key={index}
            className={`quiz-option ${
              selectedAnswer === index 
                ? index === questions[currentQuestion].correct 
                  ? 'correct' 
                  : 'incorrect'
                : ''
            }`}
            onClick={() => handleAnswer(index)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="quiz-score">
        Question {currentQuestion + 1}/{questions.length} | Score: {score}
      </div>
    </div>
  );
};

export default Games;