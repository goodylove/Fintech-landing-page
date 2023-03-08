import { useState } from "react";
import NavBar from "./../NavBar/index";
import FinTech from "./../fintechbanner.jsx/index";
import Service from "./../service/index";
import Steps from "./../steps/index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FinTech />
      <Service />
      <Steps />
    </div>
  );
}

export default App;
