import { useState } from "react";
import NavBar from "./../NavBar/index";
import FinTech from "./../fintechbanner.jsx/index";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <FinTech />
    </div>
  );
}

export default App;
