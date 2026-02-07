function Portfolio() {
  return (
    <div className="portfolio">
      <h6>Portfolio</h6>
      <h2>Zij stralen al met een knaller van een website!</h2>
      <div className="portfolio-cards">
        <div className="portfolio-card">
          <div className="portfolio-card-name">Vis & Traiteur Dessing</div>
          <div className="portfolio-card-image">
            <img src="/media/dessing.webp" alt="Vis & Traiteur Dessing" />
            <a href="https://vistraiteurdessing.nl" target="_blank">
              <button>Bekijk dit project</button>
            </a>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-card-name">Vis & Traiteur Dessing</div>
          <div className="portfolio-card-image">
            <img src="/media/dessing.webp" alt="Vis & Traiteur Dessing" />
            <a href="https://vistraiteurdessing.nl" target="_blank">
              <button>Bekijk dit project</button>
            </a>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-card-name">Vis & Traiteur Dessing</div>
          <div className="portfolio-card-image">
            <img src="/media/dessing.webp" alt="Vis & Traiteur Dessing" />
            <a href="https://vistraiteurdessing.nl" target="_blank">
              <button>Bekijk dit project</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
