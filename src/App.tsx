import React from "react";
import logo from "./logo.png";
import "./App.scss";
import "./Header.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welkom @ Web Verde! <br /><br />
          Een <b>webbureau</b> zonder website... Gek he?
          <br />
          <br />
          Niet getreurd! Een <a href="https://santosvdw.nl">website</a> hebben we zeker! Deze bevat echter nog niet
          onze nieuwe naam en uitstraling (die zo veel leuker is!)
          <br />
          <br />
          Daarom bevind je je momenteel op deze erg lege pagina, waar
          zometeen al onze toffe projecten te vinden zijn! <br />
          <br />
          Kan je niet langer wachten en wil je gelijk met ons aan de slag, of
          ben je erg benieuwd naar onze vorige projecten? Stuur ons dan een{" "}
          <a href="mailto:info@webverde.nl">mailtje</a> of neem een kijkje op
          onze <a href="https://santosvdw.nl">oude website</a>!
        </p>
      </header>
    </div>
  );
}

export default App;
