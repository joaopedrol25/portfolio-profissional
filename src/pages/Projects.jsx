const Projects = () => {
  return (
    <main className="main-wrapper">
      <section className="projects section" id="projects">
        <div className="section-container">
          <h2 className="section-heading text-center">Projetos Recentes</h2>
          <p className="section-subheading text-center">
            Uma seleção de projetos em que estou trabalhando ou planejo desenvolver em breve.
          </p>
          <div className="projects-grid">
            {/* Projeto 1 */}
            <div className="project-card">
              <div className="project-content">
                <div className="project-header">
                  <i className="ri-server-line project-icon"></i>
                  <span className="project-tag">Em breve</span>
                </div>
                <h3 className="project-title">Orquestração com Docker Swarm</h3>
                <p className="project-description">
                  Configuração de clusters de alta disponibilidade, balanceamento de carga e escalonamento automático de serviços utilizando Docker Swarm.
                </p>
                <div className="project-tech">
                  <span>Docker Swarm</span>
                  <span>DevOps</span>
                  <span>Linux</span>
                </div>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="project-card">
              <div className="project-content">
                <div className="project-header">
                  <i className="ri-instance-line project-icon"></i>
                  <span className="project-tag">Em breve</span>
                </div>
                <h3 className="project-title">Ambientes Dockerizados</h3>
                <p className="project-description">
                  Criação de infraestruturas completas e isoladas para desenvolvimento e produção, automatizando o deploy de microsserviços.
                </p>
                <div className="project-tech">
                  <span>Docker</span>
                  <span>Docker Compose</span>
                  <span>Linux</span>
                </div>
              </div>
            </div>

            {/* Projeto 3 */}
            <div className="project-card">
              <div className="project-content">
                <div className="project-header">
                  <i className="ri-git-merge-line project-icon"></i>
                  <span className="project-tag">Em breve</span>
                </div>
                <h3 className="project-title">Pipelines de CI/CD</h3>
                <p className="project-description">
                  Automatização de testes, builds e deploys contínuos para garantir entregas de software ágeis e sem falhas.
                </p>
                <div className="project-tech">
                  <span>GitHub Actions</span>
                  <span>Shell Script</span>
                  <span>Linux</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
