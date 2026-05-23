const Skills = () => {
  return (
    <main className="main-wrapper">
      <section className="skills section" id="skills">
        <div className="section-container">
          <h2 className="section-heading text-center">Habilidades Técnicas</h2>
          <div className="skills-grid">
            {/* Java */}
            <div className="skill-card">
              <div className="skill-icon-wrapper java">
                <i className="ri-java-line"></i>
              </div>
              <h3 className="skill-name">Java</h3>
              <p className="skill-desc">Desenvolvimento orientado a objetos, criação de lógicas estruturadas e desenvolvimento de APIs back-end.</p>
              <div className="skill-badge">Back-End</div>
            </div>

            {/* Docker */}
            <div className="skill-card">
              <div className="skill-icon-wrapper docker">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
                  alt="Docker" 
                  className="skill-devicon"
                />
              </div>
              <h3 className="skill-name">Docker</h3>
              <p className="skill-desc">Containerização de aplicações, isolamento de ambientes e facilitação de deploys robustos.</p>
              <div className="skill-badge">DevOps</div>
            </div>

            {/* Linux */}
            <div className="skill-card">
              <div className="skill-icon-wrapper linux">
                <i className="ri-terminal-line"></i>
              </div>
              <h3 className="skill-name">Linux & Bash</h3>
              <p className="skill-desc">Uso avançado do terminal, automação com Shell Script e gerenciamento de servidores baseados em Linux.</p>
              <div className="skill-badge">Sistemas</div>
            </div>

            {/* Python */}
            <div className="skill-card">
              <div className="skill-icon-wrapper python">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                  alt="Python" 
                  className="skill-devicon"
                />
              </div>
              <h3 className="skill-name">Python</h3>
              <p className="skill-desc">Desenvolvimento de scripts de automação, manipulação de dados e criação de ferramentas auxiliares robustas.</p>
              <div className="skill-badge">Automação</div>
            </div>

            {/* Git */}
            <div className="skill-card">
              <div className="skill-icon-wrapper git">
                <i className="ri-git-branch-line"></i>
              </div>
              <h3 className="skill-name">Git & GitHub</h3>
              <p className="skill-desc">Controle de versão, ramificações de código (branching) e colaboração ágil em equipe.</p>
              <div className="skill-badge">Controle</div>
            </div>

            {/* Inglês */}
            <div className="skill-card">
              <div className="skill-icon-wrapper english">
                <i className="ri-earth-line"></i>
              </div>
              <h3 className="skill-name">Inglês</h3>
              <p className="skill-desc">Leitura e escrita técnica fluente. Comunicação intermediária para colaboração em projetos e documentação internacional.</p>
              <div className="skill-badge">Intermediário</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
