import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./Context";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import Hoje from "./Hoje";
import Historico from "./Historico";

function App() {
  const [userinfo, setuserinfo] = React.useState(undefined);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Context.Provider value={{ userinfo, setuserinfo }}>
        <Routes>
          <Route path="/" exact={true} element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
