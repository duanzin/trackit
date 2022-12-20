import React from "react";
import styled from "styled-components";
import axios from "axios";
import lixo from "./assets/Vector.png";

export default function LiHabito(props) {
  return (
    <Li>
      <div>
        <h3>{props.titulo}</h3>
        <img src={lixo} alt="deletar"></img>
      </div>
      <div>
        <div>D</div>
        <div>S</div>
        <div>T</div>
        <div>Q</div>
        <div>Q</div>
        <div>S</div>
        <div>S</div>
      </div>
    </Li>
  );
}

const Li = styled.li`
  width: 340px;
  height: 91px;
  padding: 15px 0;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    h3 {
      font-size: 19.976px;
      line-height: 25px;
      color: #666666;
    }
    img {
      width: 13px;
      height: 15px;
    }
  }
  div :last-child {
    justify-content: flex-start;
    column-gap: 4px;
    div {
      all: unset;
      width: 30px;
      height: 30px;
      background: #ffffff;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      font-size: 19.976px;
      line-height: 25px;
      color: #dbdbdb;
    }
  }
`;
