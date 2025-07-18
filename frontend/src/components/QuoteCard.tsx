import { Card, makeStyles, Body1, Caption1 } from "@fluentui/react-components";

const useStyles = makeStyles({
  card: {
    padding: "2rem",
    maxWidth: "700px",
    fontStyle: "italic",
    backgroundColor: "#F0EBF8",
    borderLeft: "5px solid #402E76",
  },
});

const QuoteCard = () => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <Body1>
        “Aprender a programar es como aprender a escribir: primero se aprenden las reglas,
        luego se aprende a romperlas con elegancia.”
      </Body1>
      <Caption1 style={{ marginTop: "1rem", textAlign: "right" }}>
        — Inspirado por S. Beck y otros autores literarios
      </Caption1>
    </Card>
  );
};

export default QuoteCard;