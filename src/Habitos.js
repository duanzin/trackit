import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "./Context";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Habitos() {
  const { userinfo } = useContext(Context);
  const [criar, setcriar] = React.useState(false);
  const config = {
    headers: {
      Authorization: userinfo.token,
    },
  };
  const percentage = 66;

  function Novohabito() {
    const [nomehabito, setnomehabito] = React.useState("");

    return (
      <HabitoVazio>
        <input
          id="nomehabito"
          type="text"
          value={nomehabito}
          onChange={(e) => setnomehabito(e.target.value)}
          placeholder="nome do hábito"
        ></input>
        <div></div>
        <div>
          <button>Cancelar</button>
          <button>Salvar</button>
        </div>
      </HabitoVazio>
    );
  }

  return (
    <>
      <Header>
        <h1>TrackIt</h1>
        <img src={userinfo.image} alt="pfp"></img>
      </Header>
      <Main>
        <div>
          <h2>Meus hábitos</h2>
          <button
            onClick={() => {
              setcriar(true);
            }}
          >
            +
          </button>
        </div>
        {criar ? <Novohabito /> : <></>}
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Main>
      <Footer>
        <Link to="/habitos">Hábitos</Link>
        <div>
          <Link to="/hoje">
            <CircularProgressbar
              value={percentage}
              text="Hoje"
              styles={buildStyles({
                pathColor: `#FFFFFF`,
                textColor: "#FFFFFF",
                trailColor: "#52b6ff",
              })}
            />
          </Link>
        </div>
        <Link to="/historico">Histórico</Link>
      </Footer>
    </>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  h1 {
    font-family: "Playball", cursive;
    font-size: 38.982px;
    line-height: 49px;
    color: #ffffff;
  }
  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  height: 100vh;
  padding: 98px 15px;
  background: #f2f2f2;
  p {
    margin-top: 20px;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 22.976px;
      line-height: 29px;
      color: #126ba5;
    }
    button {
      width: 40px;
      height: 35px;
      background: #52b6ff;
      font-size: 26.976px;
      line-height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      border: none;
      border-radius: 4.63636px;
    }
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 70px;
  padding: 0 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  a {
    font-size: 17.976px;
    line-height: 22px;
    text-decoration: none;
    color: #52b6ff;
  }
  div {
    width: 91px;
    height: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #52b6ff;
    margin-bottom: 40px;
    padding: 6px;
    border-radius: 50px;
  }
`;

const HabitoVazio = styled.form`
  width: 340px;
  height: 180px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 5px;
  input {
    width: 303px;
    height: 45px;
    padding-left: 11px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    ::placeholder {
      font-size: 19.976px;
      line-height: 25px;
      color: #dbdbdb;
    }
  }
  div:first-child {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 4px;
  }
  div:last-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    column-gap: 30px;
    button {
      font-size: 15.976px;
      line-height: 20px;
      text-align: center;
    }
    button:first-child {
      border: none;
      background: #ffffff;
      color: #52b6ff;
    }
    button:last-child {
      width: 84px;
      height: 35px;
      background: #52b6ff;
      color: #ffffff;
      border: none;
      border-radius: 4.63636px;
    }
  }
`;
