import React from "react";
import styled from "styled-components";
const Btn = styled.button`
  display: block;
  padding: 15px;
  border: none;
  background: #009680;
  color: #fff;
  margin: 20px auto;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 3px;
  cursor: pointer;
  transition: 0.2s all ease;
  &:hover {
    background: #000;
  }
`;
const Button = props => {
  return <Btn onClick={props.onClick}>{props.children}</Btn>;
};

export default Button;
