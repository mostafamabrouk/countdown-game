import React from "react";
import styled from "styled-components";
const UL = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
  li {
    margin: 10px;
  }
`;
const Score = props => {
  const { wins, loses } = props;

  return (
    <UL>
      <li>
        <strong>Win:</strong> {wins}
      </li>
      <li>
        <strong>Loses:</strong> {loses}
      </li>
    </UL>
  );
};

export default Score;
