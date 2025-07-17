// src/components/Footer/Footer.tsx

import { makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#402E76",
    color: "white",
    padding: "2rem",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: "1.5rem",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    rowGap: "0.5rem",
    minWidth: "200px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightRegular,
    ":hover": {
      color: "#FFBD59",
    },
  },
  copyright: {
    textAlign: "center",
    color: "#D0C9E8",
    marginTop: "2rem",
    width: "100%",
    fontSize: tokens.fontSizeBase200,
  },
});

const FooterFluent = () => {
  const styles = useStyles();

  return (
    <footer>
      <div className={styles.footer}>
        {/* Columna 1 */}
        <div className={styles.column}>
          <Link to="/" className={styles.link}>Inicio</Link>
          <Link to="/catalogo" className={styles.link}>Catálogo</Link>
          <Link to="/catalogo" className={styles.link}>Más vendidos</Link>
        </div>

        {/* Columna 2 */}
        <div className={styles.column}>
          <Link to="/consultas" className={styles.link}>Consultas</Link>
          <Link to="/quienes-somos" className={styles.link}>Sobre nosotros</Link>
          <Link to="/iniciar-sesion" className={styles.link}>Perfil</Link>
        </div>

        {/* Columna 3 */}
        <div className={styles.column}>
          <span className={styles.link}>Av. Ávalos 400, Resistencia, Chaco</span>
          <span className={styles.link}>+54 3728-129433</span>
          <span className={styles.link}>consultas@soundscape.com</span>
        </div>
      </div>

      <div className={styles.copyright}>
        Soundscape, todos los derechos reservados © 2025
      </div>
    </footer>
  );
};

export default FooterFluent;
