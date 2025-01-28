import Board from "./Board";
import { useState, useEffect } from "react";
import { calculateWinner } from "./utils";
import GameInfos from "./GameInfos";

function App() {
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  // const [squares, setSquares] = useState(Array(9).fill(null));
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setIsGameOver(false);
  };

  const handleRestartGame = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setIsGameOver(false);
  };

  const winner =
    calculateWinner(currentSquares) && calculateWinner(currentSquares).winner;
  const winningLines =
    calculateWinner(currentSquares) &&
    calculateWinner(currentSquares).winningLines;

  useEffect(() => {
    if (winner || currentMove === 9) setIsGameOver(true);
  }, [currentSquares]);

  const gameStatus = () => {
    if (winner) {
      return "game over ! winner is  " + winner + " !";
    } else if (isGameOver) {
      return "game over ! it is a draw!";
    } else {
      return "next player : " + (xIsNext ? "X" : "O");
    }
  };

  // console.log(history);
  // console.log(currentMove);

  return (
    <section className="mx-auto max-w-6xl p-16 h-full ">
      <h1 className="text-4xl font-bold text-center"> Welcome to TicTacToe</h1>
      <h1 className="mt-16 text-2xl font-bold text-center capitalize border-dashed border-4 border-violet-600 p-4">
        {gameStatus()}
      </h1>
      <div className="mt-16 grid gap-16 md:grid-cols-7">
        <div className="mx-auto md:col-span-4">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
            winner={winner}
            winningLines={winningLines}
          />
        </div>
        <div className="md:col-span-3">
          <GameInfos history={history} jumpTo={jumpTo} />
        </div>
      </div>

      <button
        className="mt-16 capitalize bg-violet-500 rounded-md p-4 text-white font-bold text-xl cursor-pointer w-full "
        onClick={handleRestartGame}
      >
        play again
      </button>
    </section>
  );
}

export default App;
