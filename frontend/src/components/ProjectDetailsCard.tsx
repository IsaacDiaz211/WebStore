import { Card, Body1, Link, makeStyles } from "@fluentui/react-components";
import { Code20Filled } from "@fluentui/react-icons";


const useStyles = makeStyles({
  card: {
    padding: "2rem",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
});

const ProjectDetailsCard = () => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <Body1>
        Este proyecto es una librería online desarrollada como ejercicio de práctica
        con tecnologías modernas de desarrollo web.
      </Body1>
      <Body1>
        <Code20Filled /> <strong>Frontend:</strong> React, Vite, Fluent UI
        💻 <strong>Frontend:</strong> React, TypeScript, Vite, Fluent UI  
      </Body1>
      <Body1>
        🔧 <strong>Backend:</strong> Node.js, Express, MongoDB, TypeScript  
      </Body1>
      <Body1>
        🌐 <Link href="https://github.com/IsaacDiaz211/WebStore" target="_blank">Repositorio público en GitHub</Link>
      </Body1>
    </Card>
  );
};
export default ProjectDetailsCard;