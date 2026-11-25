export default function Hero() {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">MODERN MANUFACTURING <span aria-hidden="true">•</span> INDIA</p>
        <h1 id="hero-title">Build smarter.<br />Move forward.</h1>
        <p className="hero-description">
          Practical manufacturing solutions for teams ready to plan production, improve workflows, and take the next step.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#register">Request a consultation</a>
          <a className="button button-secondary" href="#capabilities">Explore capabilities</a>
        </div>
        <ul className="hero-points" aria-label="Nexa benefits">
          <li>Process-first</li><li>Responsive partnership</li><li>Clear next steps</li>
        </ul>
      </div>
      <div className="hero-visual">
        <img
          src="/assets/manufacturing_illustration.svg"
          width="620"
          height="420"
          fetchPriority="high"
          alt="Illustration of a modern manufacturing facility and production workflow"
        />
      </div>
    </section>
  );
}
