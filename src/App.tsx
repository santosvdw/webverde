import React from "react";
import "./App.scss";
import "./styles/buttons.scss";
import './components/Header';
import Header from "./components/Header";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import OverOns from "./components/OverOns";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Portfolio />
      <ContactForm />
      <OverOns />
      <Footer />
    </div>
  );
}

export default App;
