import styles from './AboutMeStyles.module.css';
import logo from '../../assets/svgLogo.png'

const AboutMe = () => {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">About Me</h1>
            <div className={styles.aboutDetails}>
                <div id='aboutImgDiv' className={styles.aboutDetailsItemOne}>

                    <img className={styles.aboutImg} src={logo} alt="" />

                </div>
                <div className={styles.aboutDetailsItemTwo}>
                    <div>
                        <h2>Education & Job</h2>
                        <p className={styles.aboutP}>
                            Hello! I am Azizul Rabby Chowdhury, an <span className={styles.bold}>Inspector of Taxes</span> with the Bangladesh government, from the 34th BCS non-cadre. I hold a <span className={styles.bold}>Masters in Social Work</span> from Shahjalal University of Science and Technology.
                        </p>
                    </div>
                    <div>
                        <p className={styles.aboutP}>
                            <h2>Goal</h2>
                            Driven by a passion for technology, I have immersed myself in coding through open-source learning. Now, I amm determined to transition my career into <span className={styles.bold}>web development</span>, showcasing my journey and projects here.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutMe;

