import { useState } from "react";
import NavBar from "./../NavBar/index";
import FinTech from "./../fintechbanner.jsx/index";
import Service from "./../service/index";
import Steps from "./../steps/index";
import Faq from "./../faq/index";

import "./App.css";
import Testimonials from "./../testimonals/indxe";
import Email from "./../email/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <FinTech />
      <Service />
      <Steps />
      <Faq />
      <div>
        <Testimonials />
      </div>

      <Email />
    </div>
  );
}

export default App;
