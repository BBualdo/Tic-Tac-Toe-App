import React from "react";
import logo from '../images/logo.svg';
import xTurn from '../images/pick-x.svg';
import oTurn from '../images/pick-o.svg';

export default function Board(props) {
  // Represent the game board
  const [board, setBoard] = React.useState(Array(9).fill(''));
  // Represents currentPlayer
  const [currentPlayer, setCurrentPlayer] = React.useState('x');
  // Represents game status
  const [gameResult, setGameResult] = React.useState('ongoing');
  // Counting results
  const [results, setResults] = React.useState({
    xWins: 0,
    ties: 0,
    oWins: 0 
  })

  // board rendering component
  function BoardFields() {
    // Represents cell hover image
    const [hoveredCell, setHoveredCell] = React.useState(null);

    const handleCellClick = (i) => {
      if (board[i] === '' && gameResult === 'ongoing') {
        const newBoard = [...board];
        newBoard[i] = currentPlayer;
        setBoard(newBoard);
        const winner = checkWinner(newBoard);
        if (winner) {
          setGameResult(winner === 'tie' ? 'tie' : `${winner} wins`)
          winner === 'x' 
          ? setResults(prevResults => ({...prevResults, xWins: prevResults.xWins + 1})) 
          : winner === 'o'
          ? setResults(prevResults => ({...prevResults, oWins: prevResults.oWins + 1}))
          : setResults(prevResults => ({...prevResults, ties: prevResults.ties + 1}))
        } else {
          nextTurn()
        }
      }
    };

     // function that switches turns
    function nextTurn() {
      setCurrentPlayer(prevPlayer => {
        return prevPlayer === 'x' ? 'o' : 'x'
      })
    }

    return board.map((cell, i) => (
      <div 
      key={i} 
      className={
        `board--field field--${cell} 
        ${hoveredCell === i 
          && cell === '' 
          && gameResult === 'ongoing' 
          && `cell-hover-${currentPlayer}`}`
      }
      onClick={() => handleCellClick(i)}
      onMouseEnter={() => setHoveredCell(i)}
      onMouseLeave={() => setHoveredCell(null)}
      >{cell}</div>
    ))
  }

  // function that checks result after each move
  function checkWinner(board) {
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return mark that is on this position
      }
    }
    
    if (board.every(cell => cell !== '')) {
      return 'tie' // If every cell is occupied and not found any win condition there is a tie
    }

    return null // Game is still ongoing
  }

  // function that check who's turn is it
  function whosTurn() {
    if (currentPlayer === 'x') {
      return xTurn
    } else {
      return oTurn
    }
  }
  // function that restarts the game
  function restartGame() {
    setBoard(Array(9).fill(''))
    setCurrentPlayer('x')
    setGameResult('ongoing')
  }

  return (
    <section className="board">
      <header>
      <img className="app--logo" src={logo}/>
      <div className="current-turn">
        <img 
        className="current-player--img" 
        src={whosTurn()}/>
        <h4>Turn</h4>
      </div>
      <button 
      onClick={restartGame}
      className="restart-game--button"
      ></button>
      </header>
      <div className="board--grid">
      <BoardFields />
      </div>
      <div className="results">
        <div className="result result--x">
          <p>X ({/* Add info about who is it */})</p>
          <h2>{results.xWins}</h2>
        </div>
        <div className="result result-ties">
          <p>Ties</p>
          <h2>{results.ties}</h2>
        </div>
        <div className="result result--o">
          <p>O ({/* Add info about who is it */})</p>
          <h2>{results.oWins}</h2>
        </div>
      </div>
    </section>
  )
}