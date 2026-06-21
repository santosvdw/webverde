import upperDivider from "../imgs/upper-divider.png";
import lowerDivider from "../imgs/lower-divider.png";
import star from "../imgs/star.png";
import "../styles/intro.scss";

export default function Intro() {
  return (
    <div className="introduction-block">
      <img src={upperDivider} className="upper-divider" alt="" />
      <section className="introduction">
        <article>
          <h3 className="white-underline">Wat we doen</h3>
          <p>
            Creative web solutions. Oftewel, jij hebt een wens en wij doen het toverwerk. Je bestaande website op de schop gooien, een compleet nieuw ontwerp maken of gewoon regulier onderhoud, bij ons kan het allemaal.
          </p>
        </article>
        <article>
          <h3 className="white-underline">Voor wie doen we het</h3>
          <p>
            Jij bent anders. Jouw bedrijf is anders. Achter jouw bedrijf zit een idee dat een gewone website niet kan omvatten. Jij hebt maatwerk nodig: een website die gebouwd is om met jouw bedrijf mee te groeien in vibe en flow.
          </p>
        </article>
      </section>
      <img src={lowerDivider} className="lower-divider" alt="" />
      <div className="intro-stars">
        <img src={star} id="star-1" alt="" />
        <img src={star} id="star-2" alt="" />
      </div>
    </div>
  );
}
