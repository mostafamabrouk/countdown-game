import React from "react";
import styled from "styled-components";

const Card = React.forwardRef((props, ref) => {
  const { char, opaque, error, success } = props;

  const Div = styled.div`
    width: 120px;
    height: 160px;
    border: 2px solid #000;
    margin: 0 8px;
    text-transform: uppercase;
    line-height: 160px;
    font-family: Helvetica;
    font-size: 96px;
    color: #009680;
    text-align: center;
    cursor: move;
    transition: 0.2s all ease;
    ${opaque && `opacity: 0.25;`}
    ${error && `border-color: #FF0000; opacity: 0.42;`}
    ${success && `border-color: #6CBC36; color: #000;`}
  `;

  return <Div ref={ref}>{char}</Div>;
});

export default Card;
