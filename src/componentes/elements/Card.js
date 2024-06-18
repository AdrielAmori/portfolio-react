import styles from "./Card.module.css";
import ButtonB from "./ButtonB";

import React, { useState } from "react";

function Card({ img, title, tech, description, repo, site }) {
  const [info, setInfo] = useState(false);

  function showDetails() {
    setInfo(true);
  }

  function hideDetails() {
    setInfo(false);
  }

  return (
    <div onMouseLeave={hideDetails} className={styles.card}>
      <a onMouseEnter={showDetails}
        href={site}>
        <img src={img} alt="ERRO" />
      </a>

      {info === true && (
        <section>
        <h3>{title}</h3>
        <p>
          <strong>Tecnologia:</strong>
          {tech}
        </p>
        <p>{description}</p>
        <ButtonB text="Acesse o repositório" link={repo} />
      </section>
      )}

    </div>
  );
}

export default Card;
