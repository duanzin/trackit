import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/Logo1.png";

export default function Cadastro() {
  const navigate = useNavigate();

  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [name, setname] = React.useState("");
  const [image, setimage] = React.useState("");

  const [disable, setdisable] = React.useState(false);

  function cadastrar(event) {
    event.preventDefault();
    setdisable(true);
    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      {
        email: email,
        name: name,
        image: image,
        password: password,
      }
    );
    request.then(() => {
      navigate(`/`);
    });
    request.catch(() => {
      alert("Falha ao cadastrar, tente novamente");
      setdisable(false);
    });
  }

  return (
    <Container>
      <img src={logo} alt="logo"></img>
      <form onSubmit={cadastrar}>
        <input
          disabled={disable}
          id="email"
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="email"
          required
        ></input>
        <input
          disabled={disable}
          id="senha"
          type="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="senha"
          required
        ></input>
        <input
          disabled={disable}
          id="nome"
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="nome"
          required
        ></input>
        <input
          disabled={disable}
          id="foto"
          type="text"
          value={image}
          onChange={(e) => setimage(e.target.value)}
          placeholder="foto"
          required
        ></input>
        <button type="submit" disabled={disable}>
          Cadastrar
        </button>
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
      :disabled {
        background: #f2f2f2;
        color: #afafaf;
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
