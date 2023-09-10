import React from "react";
import logo from '../images/logo.svg';
import xTurn from '../images/pick-x.svg';
import oTurn from '../images/pick-o.svg';

export default function Board(props) {

  function BoardFields() {
    const fields = []
    for (let i = 0; i < 9; i++) {
      fields.push(
      <div 
      key={i} 
      className="board--field" 
      onClick={props.changeTurn}
      />
      )
    }
    return fields
  }

  function whosTurn() {
    if (props.turn === 'X') {
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
          <p>X (You)</p>
          <h2>0</h2>
        </div>
        <div className="result result-ties">
          <p>Ties</p>
          <h2>0</h2>
        </div>
        <div className="result result--o">
          <p>O (CPU)</p>
          <h2>0</h2>
        </div>
      </div>
    </section>
  )
}