import styles from "../../pages/Error/Error.module.css";
import Template from "../../components/Templates/PageTemplate";
import { Link } from "react-router-dom";

function PageError() {
  return (
    <Template>
        <div className={styles.leMain}>
          <h1 className={styles.title404}>404</h1>
          <div className={styles.textError1}>
            <p>Oups! La page que </p> <p> vous demandez nexiste pas.</p>
          </div>
          <Link to="/" className={styles.liens_globale}>
            <p className={styles.textError2}>Retouner sur la page d'accueil</p>
          </Link>
        </div>
    </Template>
    
  );
}

export default PageError;


