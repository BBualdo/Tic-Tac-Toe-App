import React from "react";
import logo from '../images/logo.svg';
import xTurn from '../images/pick-x.svg';
import oTurn from '../images/pick-o.svg';

export default function Board() {
  return (
    <section className="board">
      <header>
      <img className="app--logo" src={logo}/>
      <div className="current-turn">
        <img className="current-player--img" src={xTurn}/>
        <h4>Turn</h4>
      </div>
      <button className="restart-game--button"></button>
      </header>
      <div className="board--grid">
        <div className="board--field"></div>
        <div className="board--field"></div>
        <div className="board--field"></div>
        <div className="board--field"></div>
        <div className="board--field"></div>
        <div className="board--field"></div>
        <div className="board--field"></div>
        <div className="board--field"></div>
        <div className="board--field"></div>
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