import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const phrases = [
    'DevOps Engineer',
    'Estudante de SI',
    'Entusiasta de Docker',
    'Apaixonado por Linux'
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const typeEffect = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        setTypingText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setTypingSpeed(50); // Velocidade mais rápida ao apagar
      } else {
        setTypingText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setTypingSpeed(100); // Velocidade normal
      }

      // Condições de transição
      if (!isDeleting && charIndex === currentPhrase.length) {
        setTypingSpeed(1500); // Pausa no final
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setTypingSpeed(500); // Pausa antes de iniciar próxima
      }
    };

    const timer = setTimeout(typeEffect, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, typingSpeed]);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">Olá, meu nome é</span>
          <h1 className="hero-title">João Pedro</h1>
          <h2 className="hero-dynamic-title">
            <span className="typing-text">{typingText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Estudante de Sistemas de Informação com foco em DevOps e Back-End. Construindo soluções eficientes,
            escaláveis e robustas.
          </p>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="window-title">docker-compose.yml</span>
            </div>
            <div className="window-body">
              <pre>
                <code>
                  <span className="keyword">version</span>: <span className="string">"3.8"</span>
                  {'\n\n'}
                  <span className="keyword">services</span>:
                  {'\n'}
                  {'  '}<span className="class-name">portfolio-app</span>:
                  {'\n'}
                  {'    '}<span className="keyword">image</span>: <span className="string">joaopedrol25/portfolio:latest</span>
                  {'\n'}
                  {'    '}<span className="keyword">ports</span>:
                  {'\n'}
                  {'      '}- <span className="string">"80:80"</span>
                  {'\n'}
                  {'    '}<span className="keyword">deploy</span>:
                  {'\n'}
                  {'      '}<span className="keyword">replicas</span>: <span className="string">3</span>
                  {'\n'}
                  {'      '}<span className="keyword">update_config</span>:
                  {'\n'}
                  {'        '}<span className="keyword">parallelism</span>: <span className="string">1</span>
                  {'\n'}
                  {'        '}<span className="keyword">delay</span>: <span className="string">10s</span>
                  {'\n'}
                  {'      '}<span className="keyword">restart_policy</span>:
                  {'\n'}
                  {'        '}<span className="keyword">condition</span>: <span className="string">on-failure</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <Link to="/about" aria-label="Ir para a página sobre mim">
          <i className="ri-arrow-down-double-line"></i>
        </Link>
      </div>
    </section>
  );
};

export default Home;
