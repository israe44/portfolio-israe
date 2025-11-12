import React, { useState, useEffect } from 'react';
import { FaGamepad, FaCalculator, FaChess, FaBrain, FaQuestionCircle, FaCode } from 'react-icons/fa';
import './Games.css';

const Games = () => {
  const [activeGame, setActiveGame] = useState('calculator');

  const games = [
    { id: 'calculator', name: 'Calculator', icon: FaCalculator, description: 'A fully functional calculator with basic arithmetic operations' },
    { id: 'tictactoe', name: 'Tic-Tac-Toe', icon: FaChess, description: 'Classic X and O game with win detection' },
    { id: 'memory', name: 'Memory Game', icon: FaBrain, description: 'Test your memory by matching pairs of cards' },
    { id: 'quiz', name: 'Quiz Game', icon: FaQuestionCircle, description: 'Test your knowledge with this interactive quiz' },
    { id: 'pythonquiz', name: 'Python Quiz', icon: FaCode, description: 'Test your Python programming skills with algorithm challenges' },
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
      case 'pythonquiz':
        return <PythonQuizGame />;
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
      <button className="game-reset-btn" onClick={resetGame}>Reset Game</button>
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
      <button className="game-reset-btn" onClick={initializeGame}>New Game</button>
    </div>
  );
};

// QUIZ GAME - Fully Functional
const QuizGame = () => {
  const questions = [
    {
      question: "What does a Full Stack Developer do?",
      options: ["Creates mobile apps only", "Manages computer networks", "Works on both front-end and back-end", "Only designs websites"],
      correct: 2
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
      correct: 2
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
          <button className="game-reset-btn" onClick={resetQuiz}>Play Again</button>
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

const PythonQuizGame = () => {
  const [gameState, setGameState] = useState('menu');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const algorithms = [
    { 
      id: 1, 
      title: 'Hello World', 
      category: 'basics',
      difficulty: 'easy',
      problem: 'Afficher "bonjour" à l\'écran.',
      explanation: 'Premier programme simple pour afficher du texte.',
      solution: `print("bonjour")`,
      question: 'Quel code affiche "bonjour" à l\'écran?',
      options: [
        'echo("bonjour")',
        'print("bonjour")',
        'console.log("bonjour")',
        'System.out.println("bonjour")'
      ]
    },
    { 
      id: 2, 
      title: 'Saisir et Afficher l\'Âge', 
      category: 'basics',
      difficulty: 'easy',
      problem: 'Demander à l\'utilisateur de saisir son âge et l\'afficher.',
      explanation: 'Utilisation de input() pour lire une entrée et conversion en entier avec int().',
      solution: `n = int(input("écrire votre âge: "))  
print("votre âge est :", n)`,
      question: 'Comment demander et afficher l\'âge en Python?',
      options: [
        'age = input("Votre âge: ")',
        'n = int(input("écrire votre âge: "))\nprint("votre âge est :", n)',
        'scanf("%d", &age)',
        'let age = prompt("Votre âge: ")'
      ]
    },
    { 
      id: 3, 
      title: 'Parité d\'un Nombre', 
      category: 'conditions',
      difficulty: 'easy',
      problem: 'Vérifier si un nombre est pair ou impair.',
      explanation: 'Utilisation de l\'opérateur modulo (%) pour tester la divisibilité par 2.',
      solution: `x = int(input("Entrer un nombre: "))  
if x % 2 == 0:
    print("Paire")  
else:
    print("Impaire")`,
      question: 'Comment vérifier si un nombre est pair en Python?',
      options: [
        'if x / 2 == 0:',
        'if x % 2 == 0:',
        'if x mod 2 == 0:',
        'if even(x):'
      ]
    },
    { 
      id: 4, 
      title: 'Factorielle', 
      category: 'loops',
      difficulty: 'medium',
      problem: 'Calculer la factorielle d\'un nombre (N!).',
      explanation: 'Boucle while pour multiplier tous les nombres de 1 à N.',
      solution: `x = int(input("Entrer un nombre: ")) 
i = 1
F = 1
while i <= x:
      F = F * i 
      i += 1 
print(F)`,
      question: 'Quel code calcule correctement la factorielle?',
      options: [
        'for i in range(x): F *= i',
        'while i <= x: F = F * i; i += 1',
        'F = x * (x-1)',
        'import math; math.factorial(x)'
      ]
    }
  ];

  const startGame = () => {
    setGameState('playing');
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(60);
    setShowResult(false);
    setUserAnswer('');
  };

  const stopGame = () => {
    setGameState('finished');
  };

  const checkAnswer = (selectedOption) => {
    const currentAlgo = algorithms[currentQuestion];
    const correct = selectedOption === currentAlgo.solution;
    
    setUserAnswer(selectedOption);
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < algorithms.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setShowResult(false);
        setUserAnswer('');
      } else {
        stopGame();
      }
    }, 2000);
  };

  useEffect(() => {
    let timer;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            stopGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return '#4CAF50';
      case 'medium': return '#FF9800';
      case 'hard': return '#F44336';
      default: return '#7e3af2';
    }
  };

  if (gameState === 'menu') {
    return (
      <div className="python-quiz-game">
        <div className="game-stats">
          <div className="stat-card">
          
          
          
          </div>
          <div className="stat-card">
          
          </div>
         
        </div>

        <div className="game-description">
          
         
        </div>

        <button className="start-game-btn" onClick={startGame}>
          Start Python Quiz
        </button>
      </div>
    );
  }

  if (gameState === 'playing') {
    const currentAlgo = algorithms[currentQuestion];
    
    return (
      <div className="python-quiz-game">
        <div className="game-header">
          <div className="game-info">
            <span className="question-counter">
              Question {currentQuestion + 1}/{algorithms.length}
            </span>
            <span className="score">Score: {score}</span>
            <span className="timer">
              ⏱️ {timeLeft}s
            </span>
          </div>
          <button className="stop-game-btn" onClick={stopGame}>
            Stop Game
          </button>
        </div>

        <div className="question-card">
          <div className="question-header">
            <span 
              className="difficulty-badge"
              style={{ backgroundColor: getDifficultyColor(currentAlgo.difficulty) }}
            >
              {currentAlgo.difficulty}
            </span>
            <span className="question-category">{currentAlgo.category}</span>
          </div>

          <h2 className="question-title">{currentAlgo.question}</h2>
          
          <div className="problem-description">
            <p><strong>Problem:</strong> {currentAlgo.problem}</p>
          </div>

          <div className="quiz-options">
            {currentAlgo.options.map((option, index) => (
              <button
                key={index}
                className={`quiz-option ${showResult ? 
                  (option === currentAlgo.solution ? 'correct' : 
                   userAnswer === option ? 'incorrect' : '') : ''}`}
                onClick={() => !showResult && checkAnswer(option)}
                disabled={showResult}
              >
                <pre>{option}</pre>
                {showResult && option === currentAlgo.solution && (
                  <span className="result-icon correct">✓</span>
                )}
                {showResult && userAnswer === option && option !== currentAlgo.solution && (
                  <span className="result-icon incorrect">✗</span>
                )}
              </button>
            ))}
          </div>

          {showResult && (
            <div className={`result-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
              <h3>{isCorrect ? '🎉 Correct!' : '❌ Incorrect'}</h3>
              <p><strong>Explanation:</strong> {currentAlgo.explanation}</p>
              <div className="solution">
                <strong>Solution:</strong>
                <pre>{currentAlgo.solution}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (gameState === 'finished') {
    return (
      <div className="python-quiz-game">
        <div className="quiz-result">
          <div className="trophy-icon">🏆</div>
          <h1>Quiz Complete!</h1>
          
          <div className="score-display">
            <span className="final-score">{score}</span>
            <span className="score-divider">/</span>
            <span className="total-questions">{algorithms.length}</span>
          </div>

          <div className="score-percentage">
            {Math.round((score / algorithms.length) * 100)}%
          </div>

          <div className="results-stats">
            <div className="stat">
              <span className="stat-value">{score}</span>
              <span className="stat-label">Correct</span>
            </div>
            <div className="stat">
              <span className="stat-value">{algorithms.length - score}</span>
              <span className="stat-label">Wrong</span>
            </div>
            <div className="stat">
              <span className="stat-value">{Math.round((score / algorithms.length) * 100)}%</span>
              <span className="stat-label">Accuracy</span>
            </div>
          </div>

          <div className="action-buttons">
            <button className="game-reset-btn" onClick={startGame}>
              Play Again
            </button>
            <button className="menu-btn" onClick={() => setGameState('menu')}>
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Games;