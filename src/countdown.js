import React, { useState, Fragment } from "react";

import { GameWrap, GameDemo } from "./logical/";
import { Button, Score } from "./ui";
import { APP } from "./ui/styles";

const Countdown = props => {
  const { duration } = props;
  const [status, setStatus] = useState("notStarted");
  const [wins, setWins] = useState(0);
  const [loses, setLoses] = useState(0);

  // gameStatus: notStarted, running, solved, gameOver

  const gameOver = () => {
    setStatus("gameOver");
    setLoses(loses + 1);
  };
  const gameSolved = () => {
    setStatus("solved");
    setWins(wins + 1);
  };

  return (
    <APP>
      <Score wins={wins} loses={loses} />
      {status === "notStarted" ? (
        <Fragment>
          <GameDemo duration={duration} />
          <Button onClick={() => setStatus("running")}>Start Game</Button>
        </Fragment>
      ) : (
        <GameWrap
          isRunning={status === "running"}
          onSuccess={gameSolved}
          onGameOver={gameOver}
          duration={duration}
        />
      )}
      {(status === "gameOver" || status === "solved") && (
        <Button onClick={() => setStatus("notStarted")}>Reset Game</Button>
      )}
    </APP>
  );
};

export default Countdown;
