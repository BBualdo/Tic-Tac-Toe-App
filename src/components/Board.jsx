import React from "react";
import logo from '../images/logo.svg';
import xTurn from '../images/pick-x.svg';
import oTurn from '../images/pick-o.svg';

export default function Board(props) {
  // Represent the game board
  const [board, setBoard] = React.useState(Array(9).fill(''));
  // Represents currentPlayer
  const [currentPlayer, setCurrentPlayer] = React.useState('x');
  
  // function that switches turns
  function nextTurn() {
    setCurrentPlayer(prevPlayer => {
      return prevPlayer === 'x' ? 'o' : 'x'
    })
  }

  function BoardFields() {
    return board.map((cell, i) => (
      <div 
      key={i} 
      className="board--field" 
      onClick={nextTurn}
      >{cell}</div>
    ))
  }

  function whosTurn() {
    if (currentPlayer === 'x') {
      return xTurn
    } else {
      return oTurn
    }
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
      <button className="restart-game--button"></button>
      </header>
      <div className="board--grid">
      <BoardFields />
      </div>
      <div className="results">
        <div className="result result--x">
          <p>X ({/* Add info about who is it */})</p>
          <h2>0</h2>
        </div>
        <div className="result result-ties">
          <p>Ties</p>
          <h2>0</h2>
        </div>
        <div className="result result--o">
          <p>O ({/* Add info about who is it */})</p>
          <h2>0</h2>
        </div>
      </div>
    </section>
  )
}