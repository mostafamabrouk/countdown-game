import React, { useState, useRef } from "react";
import { Word, Card, Header } from "../ui";
import getWords from "../utils/getWord";
import { Timer } from "./index";

const GameDemo = props => {
  const { duration } = props;
  const [{ word, correctWord }] = useState(getWords());
  const ref = useRef();
  return (
    <div>
      <Timer seconds={duration} isRunning={false} />
      <Header />
      <Word>
        {word.split("").map((char, index) => (
          <Card ref={ref} char={null} key={index} />
        ))}
      </Word>
      <Word>
        {correctWord.split("").map((char, index) => (
          <Card ref={ref} char={null} key={index} />
        ))}
      </Word>
    </div>
  );
};
export default GameDemo;
