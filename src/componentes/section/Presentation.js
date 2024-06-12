import ButtonA from '../elements/ButtonA'
import styles from './Presentation.module.css'

function Presentation() {
  return(
    <div id="Presentation" className={styles.presentation}>
      <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
      <h1>Olá, eu sou Adriel Arruda!</h1>
      <p>
        Sou um apaixonado por tecnologia e soluções inovadoras. <br/>
        Como Product Manager, eu tenho o compromisso de resolver problemas <br/>
        complexos e trazer resultados excepcionais para os negócios. <br/>
        Meus projetos já geraram milhões de reais em receita anual <br/>
        estou sempre em busca de novos desafios para superar.
      </p>
      <ButtonA link='https://github.com/AdrielAmori' text='Conecte-se comigo!!'/>
    </div>
  )
}

export default Presentation
