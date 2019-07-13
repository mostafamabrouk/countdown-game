import React from "react";
import styled from "styled-components";
const TimerDOM = styled.div`
  opacity: 0.5;
  font-family: Helvetica;
  font-size: 48px;
  color: #00648f;
  text-align: center;
  transition: 0.2s all ease;
  margin: 0 0 30px;
  ${props => (props.isCompleted ? `color: #FF0000;` : "")}
`;
const Timer = ({ minutes, seconds, isCompleted }) => {
  return (
    <TimerDOM isCompleted={isCompleted}>
      {minutes}:{seconds}
    </TimerDOM>
  );
};

export default Timer;
