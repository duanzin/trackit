import React from "react";
import GlobalStyle from "./globalStyle";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from './Context';
import Login from "./Login";
import Cadastro from "./Cadastro";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/" exact={true} element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
