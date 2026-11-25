import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Nexa Manufacturing home" onClick={closeMenu}>
          <img src="/assets/nexa_logo.svg" width="188" height="48" alt="Nexa Manufacturing" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#register" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#register" onClick={closeMenu}>Get in touch</a>
        </nav>
      </div>
    </header>
  );
}
