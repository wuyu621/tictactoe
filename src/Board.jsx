import Square from "./Square";

function Board({ xIsNext, squares, onPlay, winner, winningLines }) {
  const handleClick = (i) => {
    const nextSquares = squares.slice();
    if (squares[i] || winner) return;
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  const rows = [0, 1, 2];
  const cols = [0, 1, 2];

  return (
    <>
      {rows.map((row) => {
        return (
          <div className="flex" key={row}>
            {cols.map((col) => {
              const index = row * 3 + col;
              return (
                <Square
                  key={index}
                  value={squares[index]}
                  onSquareClick={() => handleClick(index)}
                  winningLines={winningLines}
                  squareIndex={index}
                />
              );
            })}
          </div>
        );
      })}
      {/* <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div> */}
    </>
  );
}

export default Board;
