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
          <h3 className="white-underline">LOREM IPSUM</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            aspernatur corrupti expedita reiciendis neque eos consectetur quae
            sapiente, officia esse deleniti quia mollitia. Et, esse.
          </p>
        </article>
        <article>
          <h3 className="white-underline">LOREM IPSUM</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            aspernatur corrupti expedita reiciendis neque eos consectetur quae
            sapiente, officia esse deleniti quia mollitia. Et, esse.
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
