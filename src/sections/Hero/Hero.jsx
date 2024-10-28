import styles from './Hero.Styles.module.css'
import DisneyPixarMe from '../../assets/Disney Pixar Me.jpg'
import themeIcon from '../../assets/moon.svg'

function Hero() {
  return (
    <section id= "hero"> className= {styles.container}
        <div className={styles.colourModeContainer}
            ><img 
            className={styles.Hero} 
            src={DisneyPixarMe} 
            alt="Profile Pic of Malik Shittu" 
            />
            <img className={styles.colourMode}
             src={themeIcon} 
             alt= "colour mode icon"
             />
            </div>
            <div className={styles.info}>
                <h1>Malik Shittu</h1>
                <h2>Front-End Developer</h2>
            </div>

    </section>
  )
}

export default Hero
