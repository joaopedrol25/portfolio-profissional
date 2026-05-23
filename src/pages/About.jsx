const About = () => {
  return (
    <main className="main-wrapper">
      <section className="about section" id="about">
        <div className="section-container">
          <h2 className="section-heading">Sobre Mim</h2>
          <div className="about-grid">
            <div className="about-info">
              <p className="about-text">
                Sou um estudante de <strong>Sistemas de Informação</strong> com foco em <strong>DevOps</strong> e{' '}
                <strong>Back-End</strong>. Busco compreender desde a lógica pura até a arquitetura de APIs,
                microserviços escaláveis e infraestrutura moderna baseada em containers.
              </p>
              <p className="about-text">
                Acredito no poder da automação e da infraestrutura ágil, motivo pelo qual estudo e utilizo
                ferramentas como <strong>Docker</strong>, <strong>Shell Script</strong> e sistemas operacionais{' '}
                <strong>Linux</strong> no meu dia a dia.
              </p>
              <div className="about-details">
                <div className="detail-item">
                  <span className="detail-label">Localização</span>
                  <span className="detail-val">Brasil</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Educação</span>
                  <span className="detail-val">Sistemas de Informação</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Foco</span>
                  <span className="detail-val">Back-End (Java) / DevOps (Docker & Linux)</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Idiomas</span>
                  <span className="detail-val">Português (Nativo) · Inglês (Intermediário)</span>
                </div>
              </div>
            </div>

            <div className="about-card">
              <div className="profile-avatar-container">
                <div className="avatar-glow"></div>
                <div className="avatar-box">
                  <i className="ri-code-box-line avatar-icon"></i>
                </div>
              </div>
              <div className="fact-box">
                <h3 className="fact-title">Status Atual</h3>
                <p className="fact-text">Desenvolvendo projetos pessoais e acadêmicos com foco em Java e Docker.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
