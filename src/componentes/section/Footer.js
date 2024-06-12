import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import styles from './Footer.module.css'

function Footer() {
  return(
    <div className={styles.footer}>
      <ul>
        <li> <a href='https://www.instagram.com/adrielarruda/'><FaInstagram size={30}/></a></li>
        <li><a href='https://github.com/AdrielAmori'><FaGithub size={30}/></a></li>
        <li><a href='https://www.linkedin.com/in/adriel-amorim-738ba720/'><FaLinkedin size={30}/></a></li>
      </ul>
      <p>adriel680@gmail.com</p>
      <p> Adriel Arruda © 2024</p>
    </div>
  )
}

export default Footer
