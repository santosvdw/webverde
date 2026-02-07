import "../../styles/home/header.scss";
function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="header-content-text">
          <h1>Websites met karakter voor ondernemers die willen stralen!</h1>
          <p className="bold">
            Ik ontwikkel jouw marketing machine die zorgt dat jij klanten van je
            af moet slaan.
          </p>
          <div className="header-content-text-button">
            <a href="#">
              <button className="white">Kom maar op!</button>
            </a>
            <p className="small">
              Kies een website die klanten aantrekt en omzet oplevert.
            </p>
          </div>
        </div>
        <div className="header-content-messages">
          <img src="./media/message.webp" alt="Textmessage" />
          <img src="./media/response.webp" alt="Textmessage" />
        </div>
      </div>
      <div className="header-background">
        <img src="/media/header.webp" alt="Foto van tevreden klanten" />
      </div>
    </header>
  );
}

export default Header;
