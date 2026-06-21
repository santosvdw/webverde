import "../styles/portfolio.scss";
import "../styles/portfolio-card.scss";
import dessingImg from "../imgs/dessing-img.png";
import alMedinaImg from "../imgs/almedina-img.png";
import externalIcon from "../imgs/external-icon.svg";

export default function Portfolio() {
  return (
    <section className="portfolio" id="uitgelicht-werk">
      <div className="portfolio-title">
        <h2>Uitgelicht werk</h2>
      </div>
      <div className="portfolio-cards">
        <div className="portfolio-card">
          <div className="card-img">
            <img src={dessingImg} alt="" />
          </div>
          <div className="card-info">
            <div className="card-title">
              <h3>Dessing</h3>
              <a href="https://vistraiteurdessing.nl">
                <img src={externalIcon} className="card-link"/>
              </a>
            </div>
            <div className="card-desc">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo cumque non sit, veniam minima modi.
              </p>
            </div>
          </div>
        </div>
        <div className="portfolio-card">
          <div className="card-img">
            <img src={alMedinaImg} alt="" />
          </div>
          <div className="card-info">
            <div className="card-title">
              <h3>Al Medina</h3>
              <a href="https://cuppingalmedina.nl">
                <img src={externalIcon} className="card-link"/>
              </a>
            </div>
            <div className="card-desc">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo cumque non sit, veniam minima modi.
              </p>
            </div>
          </div>
        </div>
        <div className="portfolio-card">
          <div className="card-img">
            <img src={dessingImg} alt="" />
          </div>
          <div className="card-info">
            <div className="card-title">
              <h3>Outdoor en sport</h3>
              <a href="https://outdoorensport.nl">
                <img src={externalIcon} className="card-link"/>
              </a>
            </div>
            <div className="card-desc">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo cumque non sit, veniam minima modi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
