function Square({ value, onSquareClick, winningLines, squareIndex }) {
  return (
    <button
      className={`${
        winningLines && winningLines.includes(squareIndex)
          ? value === "X"
            ? "bg-violet-300"
            : "bg-amber-400"
          : null
      } border-8 border-gray-300 h-[136px] w-[136px] text-center mr-[-8px] mb-[-8px] text-6xl cursor-pointer text-violet-500 font-extrabold`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
