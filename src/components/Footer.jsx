const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">&copy; {new Date().getFullYear()} João Pedro. Todos os direitos reservados.</p>
        <div className="footer-socials">
          <a 
            href="https://github.com/joaopedrol25" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
          >
            <i className="ri-github-line"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/jo%C3%A3o-pedro-de-ara%C3%BAjo-lima-146005179/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
          >
            <i className="ri-linkedin-line"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
