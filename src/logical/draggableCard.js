import React from "react";
import { useDrag } from "react-dnd";
import { Card } from "../ui";

const DraggableCard = props => {
  const { isDropped, char, index, error } = props;
  const [{ opaque }, drag] = useDrag({
    item: { char, index, type: "char" },
    collect: monitor => ({
      opacity: monitor.isDragging()
    })
  });
  return (
    <Card
      ref={isDropped ? null : drag}
      {...props}
      char={char}
      error={error}
      opaque={opaque || isDropped}
    />
  );
};
export default DraggableCard;
