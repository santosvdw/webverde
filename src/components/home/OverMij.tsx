import Banner from "../global/Banner";

function OverMij() {
  return (
    <div className="overmij">
      <div className="overmij-banners">
        <Banner color="green" />
        <Banner color="black" />
      </div>
      <div className="overmij-content">
        <div className="overmij-text">
          <h6>Over mij</h6>
          <h2>Zo help ik bedrijven stralen!</h2>
          <p>
            Hoi, ik ben Santos! Ik help ondernemers aan creatieve,
            gebruiksvriendelijke websites die klanten trekken.
            <br />
            <br />
            Ik maak voor jou een kanon van een website die doet wat ‘ie moet
            doen: opvallen, overtuigen en resultaat opleveren. Samen bouwen we
            een website waar jij én je klanten blij van worden.
          </p>
          <ul>
            <li><strong>Persoonlijk contact</strong> – iedere website is uniek en sluit aan bij jouw verhaal.</li>
            <li><strong>Creatief en doelgericht</strong> – mooi design dat werkt en bezoekers in klanten verandert.</li>
            <li><strong>Vindbaar en gebruiksvriendelijk</strong> – soepel, snel en goed vindbaar in Google.</li>
          </ul>
        </div>
        <div className="overmij-image"><img src="/media/overmij.webp" alt="Een foto van de eigenaar" /></div>
        <div className="overmij-bg"></div>
      </div>
    </div>
  );
}

export default OverMij;
