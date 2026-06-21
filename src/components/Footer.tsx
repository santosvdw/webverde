import divider from "../imgs/upper-divider.png";
import logo from "../imgs/header.svg";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-divider">
        <img src={logo} alt="Web Verde" id="logo" />
        <img src={divider} id="footer-divider" />
      </div>
      <div className="footer-content">
        <div className="contact">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="mailto:info@webverde.nl">info@webverde.nl</a>
            </li>
            <li>
              <a href="tel:+31615622162">+31615622162</a>
            </li>
          </ul>
        </div>
        <div className="links">
          <h2>Scrolling</h2>
          <ul>
            <li>
              <a href="#uitgelicht-werk">/eerder werk</a>
            </li>
            <li>
              <a href="#over-ons">/over ons</a>
            </li>
            <li>
              <a href="#aan-de-slag">/aan de slag</a>
            </li>
          </ul>
        </div>

        <div className="info">
          <h2>Info</h2>
          <ul>
            <li>
              web verde is een website development bureau gevestigd in hoorn,
              noord-holland. is jouw bedrijf klaar voor de volgende stap? wij
              helpen je verder met groeien.
            </li>
            <li>kvk: 97856037</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; web verde</p>
      </div>
    </footer>
  );
}
