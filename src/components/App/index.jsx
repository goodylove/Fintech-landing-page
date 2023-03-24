import { useState } from "react";
import NavBar from "./../NavBar/index";
import FinTech from "./../fintechbanner.jsx/index";
import Service from "./../service/index";
import Steps from "./../steps/index";
import Faq from "./../faq/index";
import Testimonials from "./../testimonals/indxe";
import Email from "./../email/index";
import Footer from "./../footer/index";
import "./App.css";

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

      <Footer />
    </div>
  );
}

export default App;
