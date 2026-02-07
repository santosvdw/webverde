import "../../styles/components/nav.scss";

function Nav() {
  return (
    <nav>
      <div className="nav-line"></div>
      <div className="nav-content">
        <div className="nav-logo">
          <img src="/media/icon.webp" alt="Web Verde" />
          <h5>Web Verde</h5>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
