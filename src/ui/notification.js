import React from "react";
import styled from "styled-components";
const P = styled.p`
  padding: 10px;
  background: #eee;
  display: table;
  margin: auto;
  ${props => props.error && `color: #F00; background:#FFEBEE`}
  ${props => props.success && `color: #6CBC36; background:#E8F5E9`}
`;
const Notification = ({ message, error, success }) => {
  return (
    <P error={error} success={success}>
      {message}
    </P>
  );
};

export default Notification;
