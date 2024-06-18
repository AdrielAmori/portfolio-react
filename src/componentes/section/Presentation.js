import ButtonA from "../elements/ButtonA";
import styles from "./Presentation.module.css";
import { useState, useEffect } from "react";

function Presentation() {
  const [text, setText] = useState("");
  const toRotate = [
    "Adriel Arruda",
    "Desenvolvedor Front End",
    "Product Manager",
    "Inovador",
  ];
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 200;
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      toType();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const toType = () => {
    let i = loop % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop + 1);
    }
  };

  return (
    <div id="Presentation" className={styles.presentation}>
      <h4>
        <strong>Bem-vindo ao meu Portfólio</strong>
      </h4>
      <h1>Olá, eu sou {text}</h1>
      <p>
        Sou um apaixonado por tecnologia e soluções inovadoras. <br />
        Como Product Manager, eu tenho o compromisso de resolver problemas{" "}
        <br />
        complexos e trazer resultados excepcionais para os negócios. <br />
        Meus projetos já geraram milhões de reais em receita anual <br />
        estou sempre em busca de novos desafios para superar.
      </p>
      <ButtonA
        link="https://github.com/AdrielAmori"
        text="Conecte-se comigo!!"
      />
    </div>
  );
}

export default Presentation;
