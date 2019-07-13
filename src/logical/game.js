import React, { useState, useCallback, useEffect } from "react";
import update from "immutability-helper";
import { TargetCard, DraggableCard } from "./index";
import { Word } from "../ui";
import { Hint } from "../ui/styles";

const Game = props => {
  const { correctWord, word, hint, onError, onCorrectMove, isRunning } = props;
  const [targetCards, setTargetCards] = useState(
    correctWord.split("").map((char, idx) => ({
      accepts: { char, index: idx, type: "char" },
      lastDroppedItem: null
    }))
  );
  const [draggableCards] = useState(
    word.split("").map((char, idx) => ({ char, index: idx, type: "char" }))
  );
  const [droppedCards, setDroppedCards] = useState([]);
  const [correctDroppedCards, setCorrectDroppedCards] = useState([]);
  function isDropped(char, index) {
    return !!correctDroppedCards.find(
      _card => _card.char === char && _card.index === index
    );
  }

  const handleDrop = useCallback(
    (idx, item) => {
      const { char } = item;
      const correctChar = correctWord.split("")[idx];

      if (correctChar === char) {
        setDroppedCards(
          update(droppedCards, char ? { $push: [item] } : { $push: [] })
        );
        setCorrectDroppedCards(
          update(correctDroppedCards, char ? { $push: [item] } : { $push: [] })
        );
        setTargetCards(
          update(targetCards, {
            [idx]: {
              lastDroppedItem: {
                $set: item
              }
            }
          })
        );
      } else {
        setDroppedCards(
          update(droppedCards, char ? { $push: [item] } : { $push: [] })
        );
        onError();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [droppedCards, correctDroppedCards, targetCards]
  );

  useEffect(() => {
    if (correctDroppedCards.length > 0) {
      onCorrectMove(correctWord.length - correctDroppedCards.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correctDroppedCards]);

  return (
    <div>
      <Word>
        {draggableCards.map(({ char }, index) => (
          <DraggableCard
            char={char}
            index={index}
            isDropped={isDropped(char, index)}
            key={index}
            isRunning={isRunning}
            error={
              !!droppedCards.find(
                _char => _char.char === char && _char.index === index
              ) &&
              !correctDroppedCards.find(
                _char => _char.char === char && _char.index === index
              )
            }
          />
        ))}
      </Word>
      <Hint>
        <strong>Hint: </strong>
        {hint}
      </Hint>
      <Word>
        {targetCards.map(({ accepts, lastDroppedItem }, index) => (
          <TargetCard
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={item => handleDrop(index, item)}
            key={index}
          />
        ))}
      </Word>
    </div>
  );
};
export default Game;
