import styles from './Hero.Styles.module.css'
import DisneyPixarMe from '../../assets/Disney Pixar Me.jpg'
import Sun from '../../assets//icons8-light-sun-50.png'
import Moon from '../../assets//icons8-crescent-dark-moon-50.png' 
import LinkedInLightIcon from '../../assets/icons8-light-linkedin-logo-50.png'
import LinkedInDarkIcon from '../../assets/icons8-dark-linkedin-logo-50 (1).png'
import GitHubLightIcon from '../../assets/icons8-light-github-50 (1).png'
import GitHubDarkIcon from '../../assets/icons8-dark-github-50.png'

import CV from '../../assets/MALIK SHITTU RESUME.pdf'
import { useTheme } from '../../Common/ThemeContext'

function Hero() {
  const {toggleTheme, theme} = useTheme(); 


  const themeIcon = theme ==='light' ? Sun : Moon;
  const LinkedInIcon = theme === 'light' ? LinkedInLightIcon : LinkedInDarkIcon;
  const GitHubIcon = theme === 'light' ? GitHubLightIcon : GitHubDarkIcon;
  return (
    <section id= "hero"> className={styles.container}
        <div className={styles.colourModeContainer}
            ><img 
            className={styles.Hero} 
            src={DisneyPixarMe} 
            alt="Profile Pic of Malik Shittu" 
            />
            <img
             className={styles.colourMode}
             src={themeIcon} 
             alt= "colour mode icon"
             onClick={toggleTheme}
             />
            </div>
            <div className={styles.info}>
                <h1>Malik
                  <br /> 
                  Shittu</h1>
                <h2>Front-End Developer</h2>
                <span>
                  <a href="https://www.linkedin.com/in/malikshittu" target= "_blank" rel= "noopener noreferrer">
                  <img src={LinkedInIcon} alt="LinkedIn icon" />
                  </a>
                </span>
                <span>
                  <a href="https://https://github.com/Malz-jpeg" target= "_blank" rel= "noopener noreferrer">
                  <img src={GitHubIcon} alt="GitHub Icon" />
                  </a>
                </span>
                <p>With a passion for developing modern React web apps for commercial businesses.
                </p>
                <a href={CV} download>
                  <button className="hover">CV</button>
                </a>
            </div>

    </section>
  )
}

export default Hero
