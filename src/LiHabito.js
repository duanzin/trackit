import React from "react";
import styled from "styled-components";
import axios from "axios";
import lixo from "./assets/Vector.png";

export default function LiHabito(props) {
  return (
    <Li>
      <div>
        <h3>{props.titulo}</h3>
        <img
          src={lixo}
          alt="deletar"
          onClick={() => {
            const confirmBox = window.confirm(
              "Deseja deletar esse hábito?"
            );
            if (confirmBox === true) {
                const request = axios.delete(
                    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}`,
                    props.config
                  );
                  request.then(() => {
                    const requisicao = axios.get(
                        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
                        props.config
                      );
                      requisicao.then((resposta) => {
                        props.setinfohabito(resposta.data);
                      });
                      requisicao.catch(() => {
                        alert("algo deu errado")
                      });
                  });
            }
          }}
        ></img>
      </div>
      <div>
        <Span dias={props.dias} dia={1}>
          D
        </Span>
        <Span dias={props.dias} dia={2}>
          S
        </Span>
        <Span dias={props.dias} dia={3}>
          T
        </Span>
        <Span dias={props.dias} dia={4}>
          Q
        </Span>
        <Span dias={props.dias} dia={5}>
          Q
        </Span>
        <Span dias={props.dias} dia={6}>
          S
        </Span>
        <Span dias={props.dias} dia={7}>
          S
        </Span>
      </div>
    </Li>
  );
}

const Li = styled.li`
  width: 340px;
  height: 91px;
  padding: 0 15px;
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
  div:last-child {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    column-gap: 4px;
  }
`;

const Span = styled.span`
  width: 30px;
  height: 30px;
  background: ${(props) =>
    props.dias.includes(props.dia) ? "#CFCFCF" : "#ffffff"};
  border: 1px solid
    ${(props) => (props.dias.includes(props.dia) ? "#CFCFCF" : "#d5d5d5")};
  border-radius: 5px;
  font-size: 19.976px;
  line-height: 25px;
  text-align: center;
  color: ${(props) => (props.dias.includes(props.dia) ? "#FFFFFF" : "#dbdbdb")};
`;
