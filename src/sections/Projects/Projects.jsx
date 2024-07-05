import styles from './ProjectsStyles.module.css';
import banner from '../../assets/banner.jpg.jpg';
import logo from '../../assets/logo.png.jpg';
import ProjectCard from '../../common/ProjectCard';


function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={banner}
          link="https://github.com/AnasCoding1986/dialogue-dock-client"
          h3="DialogueDock"
          p="Share your thought"
        />
        <ProjectCard
          src={logo}
          link="https://github.com/AnasCoding1986/dialogue-dock-server"
          h3="DialogueDock"
          p="Backend code"
        />
      </div>
    </section>
  );
}

export default Projects;
