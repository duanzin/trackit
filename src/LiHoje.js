import React from "react";
import styled from "styled-components";
import check from "./assets/check.png";
import axios from "axios";

export default function LiHoje(props) {
  return (
    <Li feito={props.feito}>
      <div>
        <h3>{props.titulo}</h3>
        <p>
          Sequência atual: {props.sequenciaatual}
          <br />
          Seu recorde: {props.maiorsequencia}
        </p>
      </div>
      <button
        onClick={() => {
          if (props.feito === false) {
            const requisicao = axios.post(
              `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`,
              {},
              props.config
            );
            requisicao.then(() => {
              const request = axios.get(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
                props.config
              );
              request.then((resposta) => {
                props.sethabitohoje(resposta.data);
              });
              request.catch(() => {
                alert("algo deu errado");
              });
            });
          } else {
            const requisicao = axios.post(
              `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/uncheck`,
              {},
              props.config
            );
            requisicao.then(() => {
              const request = axios.get(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
                props.config
              );
              request.then((resposta) => {
                props.sethabitohoje(resposta.data);
              });
              request.catch(() => {
                alert("algo deu errado");
              });
            });
          }
        }}
      >
        <img src={check} alt="check"></img>
      </button>
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
    background: ${(props) => (props.feito ? "#8FC549" : "#ebebeb")};
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    position: relative;
    img {
      position: absolute;
      width: 35.09px;
      height: 28px;
      top: 30%;
      left: 25%;
    }
  }
`;
