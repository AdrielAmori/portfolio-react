import styles from './Skills.module.css'
import javascript from '../../Image/skill/javascript.svg'
import html from '../../Image/skill/html.svg'
import css from '../../Image/skill/css.svg'
import react from '../../Image/skill/react.svg'
import typescript from '../../Image/skill/typescript.svg'

function Skills() {
  return(
    <div className={styles.skill} id="Skills">
      <h1> Habilidades </h1>
      <p> Conheça um pouco das minhas principais habilidades e conhecimentos. </p>
      <div>
        <img src={javascript} alt="JavaScript"/>
        <img src={html} alt="HTML"/>
        <img src={css} alt="CSS"/>
        <img src={react} alt="React"/>
        <img src={typescript} alt="TypeScript"/>
      </div>
    </div>
  )
}

export default Skills
