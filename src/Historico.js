import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Context } from "./Context";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Historico() {
  const { userinfo } = useContext(Context);
  const percentage = 66;

  return (
    <>
      <Header>
        <h1>TrackIt</h1>
        <img src={userinfo.image} alt="pfp"></img>
      </Header>
      <Main>
        <h2>Histórico</h2>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
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
  height: 100vh;
  padding: 98px 15px;
  background: #F2F2F2;
  h2 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    margin-bottom: 17px;
  }
  p {
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
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
