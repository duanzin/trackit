import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/Logo1.png";

export default function Cadastro() {
  return (
    <Container>
      <img src={logo} alt="logo"></img>
      <form>
        <input id="email" type="text" placeholder="email" required></input>
        <input id="senha" type="text" placeholder="senha" required></input>
        <input id="nome" type="text" placeholder="nome" required></input>
        <input id="foto" type="text" placeholder="foto" required></input>
        <button>Entrar</button>
      </form>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 68px 0;
  img {
    width: 180px;
    height: 178px;
  }
  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 6px;
    margin-top: 32px;
    margin-bottom: 25px;
    input {
      width: 303px;
      height: 45px;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      padding-left: 11px;
      ::placeholder {
        font-size: 19.976px;
        line-height: 25px;
        color: #dbdbdb;
      }
    }
    button {
      width: 303px;
      height: 45px;
      background: #52b6ff;
      border: none;
      border-radius: 4.63636px;
      font-size: 20.976px;
      line-height: 26px;
      text-align: center;
      color: #ffffff;
    }
  }
  a {
    font-size: 13.976px;
    line-height: 17px;
    color: #52b6ff;
  }
`;
