import React from "react";
import styled from "styled-components";
import axios from "axios";

export default function LiHoje(props) {
  return (
    <Li>
      <div>
        <h3>{props.titulo}</h3>
        <p>
          Sequência atual: {props.sequenciaatual}
          <br />
          Seu recorde: {props.maiorsequencia}
        </p>
      </div>
      <button></button>
    </Li>
  );
}

const Li = styled.li`
  width: 340px;
  height: 94px;
  padding: 12px 15px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 7px;
    h3 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
  p {
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
  }
  }
  button {
    width: 69px;
    height: 69px;
    background: #ebebeb;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
  }
`;
