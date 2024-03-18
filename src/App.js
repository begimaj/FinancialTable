import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./Context";
import MainContext from "./MainContex";
import Header from "./components/Header/Header";
function App() {
  return (
    <Router>
      <ContextProvider>
        <Header />
        <MainContext />
      </ContextProvider>
    </Router>
  );
}

export default App;
