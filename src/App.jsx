import React from "react";
import Menu from "./components/Menu";
import Board from "./components/Board";
import { render } from "react-dom";

export default function App() {
  const [player1, setPlayer1] = React.useState('X');
  const [currentPage, setCurrentPage] = React.useState('menu');
  const [currentPlayerTurn, setCurrentPlayerTurn] = React.useState('X');

// function to change player related on mark
  function chooseMark(mark) {
    setPlayer1(mark);
  }

// function to change the page to board
  function togglePage() {
    setCurrentPage('board')
  }
// function to render the page with updated props
  function renderPage() {
    if (currentPage === 'menu') {
      return (
        <Menu 
          togglePage={togglePage}
          chooseMark={chooseMark}
          player={player1}
        />
      )
    } else {
      return <Board 
          player={player1}
          turn={currentPlayerTurn}
          changeTurn={nextTurn}
      />
    }
  }

  function nextTurn() {
    setCurrentPlayerTurn(prevTurn => {
      return prevTurn === 'X' ? 'O' : 'X'
    })
  }

  return (
    <main>
      {renderPage()}
    </main>
  )
}