import React from "react";
import logo from '../images/logo.svg';

export default function Menu() {
  return (
    <section className="menu">
      <img className="app--logo" src={logo}/>
      <div className="pick-mark">
        <h4>Pick Player 1's Mark</h4>
        <div className="mark-picker">
          <div className="pick--x"/>
          <div className="pick--o"/>
        </div>
        <p className="hint">Remember : X Goes First</p>
      </div>
      <div className="menu-buttons">
        <button className="new-game--button cpu">
          NEW GAME (VS CPU)
        </button>
        <button className="new-game--button player">
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </section>
  )
}