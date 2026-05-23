import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const [menuActive, setMenuActive] = useState(false);

  const handleLinkClick = () => {
    setMenuActive(false);
  };

  return (
    <header className="navbar" id="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <span className="logo-tag">&lt;</span>JP<span className="logo-tag"> /&gt;</span>
        </Link>

        <nav className={`nav-menu ${menuActive ? 'active' : ''}`} id="nav-menu">
          <NavLink to="/" className="nav-link" onClick={handleLinkClick}>
            Início
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={handleLinkClick}>
            Sobre
          </NavLink>
          <NavLink to="/skills" className="nav-link" onClick={handleLinkClick}>
            Habilidades
          </NavLink>
          <NavLink to="/projects" className="nav-link" onClick={handleLinkClick}>
            Projetos
          </NavLink>
        </nav>

        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            id="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Alternar tema escuro/claro"
          >
            <i 
              className={theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'} 
              id="theme-icon"
            ></i>
          </button>
          <button 
            className="menu-toggle" 
            id="menu-toggle" 
            onClick={() => setMenuActive(!menuActive)}
            aria-label={menuActive ? "Fechar menu" : "Abrir menu"}
          >
            <i className={menuActive ? 'ri-close-line' : 'ri-menu-3-line'}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
