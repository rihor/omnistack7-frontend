import React from "react";
/**
 * BrowserRouter precisa estar em volta de todos os componentes
 * que precisam ter acesso as rotas
 * */
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
