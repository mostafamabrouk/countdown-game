import React from "react";
import { useDrop } from "react-dnd";
import { Card } from "../ui";

const TargetCard = props => {
  const { onDrop, lastDroppedItem } = props;
  const [{ isOver }, drop] = useDrop({
    accept: "char",
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver()
    })
  });

  return (
    <Card
      ref={lastDroppedItem ? null : drop}
      char={lastDroppedItem ? lastDroppedItem.char : null}
      success={!!lastDroppedItem}
      {...props}
      opaque={isOver}
    />
  );
};
export default TargetCard;
