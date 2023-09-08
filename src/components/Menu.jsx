import React from "react";
import logo from '../images/logo.svg';
import xIcon from '../images/icon-x.svg';
import oIcon from '../images/icon-o.svg'

export default function Menu() {
  return (
    <section className="menu">
      <img className="app--logo" src={logo}/>
      <div className="pick-mark">
        <h4>Pick Player's 1 Mark</h4>
        <div className="mark-picker">
          <img className="x--icon" src={xIcon}/>
          <img className="o--icon" src={oIcon}/>
        </div>
        <p className="hint">Remember : X Goes First</p>
      </div>
      <button className="new-game--button">
        NEW GAME (VS CPU)
      </button>
      <button className="new-game--button">
        NEW GAME (VS PLAYER)
      </button>
    </section>
  )
}