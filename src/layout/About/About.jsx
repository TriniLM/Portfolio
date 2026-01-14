import styles from "./about.module.css"
import BgLineal from '../../component/BgLineal/BgLineal'

export default function About() {
  return (
    <section className={styles.about}>
      <BgLineal/>
      <div className={styles.aboutText}>
        <h2 className={styles.title}>About me</h2>
        <p>I’m Gregori, a <b>Software Engineering student</b> focused on full-stack web application development.
            Over the past few years, I’ve been learning and building projects in a self-taught way.
            I enjoy turning ideas into functional web applications and continuously improving my skills.
          </p>
      </div>
      <div className={styles.aboutImage}>
      </div>
    </section>
  )
}
