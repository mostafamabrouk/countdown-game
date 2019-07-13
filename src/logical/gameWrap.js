import React, { useState, useEffect, Fragment } from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import styled from "styled-components";
import getWords from "../utils/getWord";
import { Game, Timer } from "./index";
import { Header, Notification } from "../ui";

const GameWrap = props => {
  const { isRunning, onSuccess, onGameOver, duration } = props;
  const [errorsCount, setErrorsCount] = useState(3);
  const [{ word, correctWord, hint }] = useState(getWords());
  console.log("word", word);
  console.log("correctWord", correctWord);

  const [message, setMessage] = useState({
    message: (
      <span>
        Wow, start dragging your first card. Choose your moves wisely as you
        have only <strong>3</strong> trials
      </span>
    ),
    error: false
  });
  useEffect(() => {
    if (errorsCount === 0) {
      onGameOver();
      setMessage({
        message: `Game Over!`,
        error: true,
        success: false
      });
    } else if (errorsCount < 3) {
      setMessage({
        message: (
          <span>
            Ops, Wrong choice!! Choose your moves wisely. You only have{" "}
            <strong>{errorsCount}</strong> trials left.
          </span>
        ),
        error: true,
        success: false
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorsCount]);

  const Message = styled.p`
    padding: 10px;
    background: #eee;
    display: table;
    margin: auto;
    ${message.error && "color: #F00; background:#E57373 "}
    ${message.success && "color: #6CBC36; background: #81C784;"}
  `;
  return (
    <Fragment>
      <Timer
        seconds={duration}
        isRunning={isRunning}
        onTimerCompleted={() => {
          onGameOver();
          setMessage({
            message: `Timeout, Game Over!`,
            error: true,
            success: false
          });
        }}
      />
      <Header />
      <DndProvider backend={HTML5Backend}>
        <Game
          word={word}
          correctWord={correctWord}
          hint={hint}
          isRunning={isRunning}
          onCorrectMove={remainingChars => {
            if (remainingChars === 0) {
              onSuccess();
              setMessage({
                message: <span>Nice guess, congratulations</span>,
                error: false,
                success: true
              });
            } else if (remainingChars === 1) {
              setMessage({
                message: (
                  <span>
                    Great, <strong>last character</strong>. Almost there...
                  </span>
                ),
                error: false,
                success: false
              });
            } else {
              setMessage({
                message: (
                  <span>
                    Great, Only <strong>{remainingChars}</strong> characters
                    remaining
                  </span>
                ),
                error: false,
                success: false
              });
            }
          }}
          onError={() => {
            setErrorsCount(errorsCount - 1);
          }}
        />
        {<Notification {...message} />}
      </DndProvider>
    </Fragment>
  );
};
export default GameWrap;
