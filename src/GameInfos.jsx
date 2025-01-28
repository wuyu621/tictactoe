import React from "react";

function GameInfos({ history, jumpTo }) {
  return (
    <ul className="flex flex-col gap-y-2">
      {history.map((_, move) => {
        // console.log(move);
        let description;
        if (move > 0) {
          description = "Go to move #" + move;
        } else {
          description = "Go to game start";
        }
        return (
          <li key={move}>
            <button
              className="cursor-pointer bg-violet-200 rounded-md p-2 w-full text-lg"
              onClick={() => jumpTo(move)}
            >
              {description}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default GameInfos;
