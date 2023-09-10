import React from "react";
import Menu from "./components/Menu";
import Board from "./components/Board";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState(
  <Menu 
    togglePage={togglePage}
  />)

  function togglePage() {
    setCurrentPage(<Board />)
  }

  return (
    <main>
      {currentPage}
    </main>
  )
}