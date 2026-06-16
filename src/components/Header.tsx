import "../styles/header.scss";
import cornerDecoration from "../imgs/corner-decoration.png";
import sideDecoration from "../imgs/side-decoration.png";
import title from "../imgs/header.svg";
import subtitle from "../imgs/subtitle.svg";

export default function Header() {
  return (
    <header>
      <h1 className="site-title">
        <img src={title} alt="Web Verde" />
      </h1>
      <h1 className="site-subtitle">
        <img src={subtitle} alt="Creative web solutions" />
      </h1>
      <div className="header-buttons">
        <a href="#eerder-werk">
          <button className="tilt-right">Eerder werk</button>
        </a>
        <a href="#over-ons">
          <button className="tilt-left">Over ons</button>
        </a>
        <a href="#aan-de-slag">
          <button className="tilt-right">Aan de slag</button>
        </a>
      </div>
      <div className="header-decoration">
        <img src={cornerDecoration} id="header-corner-decoration" />
        <img src={sideDecoration} id="header-side-decoration" />
      </div>
    </header>
  );
}
