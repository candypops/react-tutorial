import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import "./App.css";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { resetGameStorage, saveGameStorage } from "./logic/storage";

function App() {
  //para condicionar el estado inicial usamos una arrow function porque los estados solo se inicializan 1 vez
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem("board");
    return boardFromLocalStorage
      ? JSON.parse(boardFromLocalStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem("turn");
    return turnFromLocalStorage ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    //do not overwrite moves
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn; // guarda la jugada en el array que vemos en pantalla
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveGameStorage(newBoard, newTurn)

    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  };

  return (
    <>
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}> New game</button>

        <section className="game">
          {board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            );
          })}
        </section>

        <section className="turn">
          <Square isActivePlayer={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isActivePlayer={turn === TURNS.O}>{TURNS.O}</Square>
        </section>

        <WinnerModal winner={winner} resetGame={resetGame} />
      </main>
    </>
  );
}

export default App;
