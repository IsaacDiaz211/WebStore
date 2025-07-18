import { Card, Body1Strong, Body1, makeStyles } from "@fluentui/react-components";
import { CalendarLtr20Filled } from "@fluentui/react-icons";


const useStyles = makeStyles({
  card: {
    padding: "2rem",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  item: {
    borderLeft: "4px solid #402E76",
    paddingLeft: "1rem",
  },
});

const TimeLineCard = () => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <Body1Strong>Línea de desarrollo</Body1Strong>
      <div className={styles.item}>
        <Body1><CalendarLtr20Filled /> Febrero 2025 — Comienzo del backend.</Body1>

        <Body1>🟣 Febrero 2025 — Comienzo del diseño del backend con Node y Mongo.</Body1>
      </div>
      <div className={styles.item}>
        <Body1>🟣 Marzo 2025 — Inicio del frontend con Vite + React + Fluent UI.</Body1>
      </div>
      <div className={styles.item}>
        <Body1>🟣 Julio 2025 — Rediseño visual, integración de componentes animados.</Body1>
      </div>
    </Card>
  );
};

export default TimeLineCard;