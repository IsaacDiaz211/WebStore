// src/components/FilterCard/FilterCard.tsx

import {
  Card,
  CardHeader,
  Checkbox,
  makeStyles,
  Body1Strong,
  Switch,
} from "@fluentui/react-components";
import React from "react";
import { useState } from "react";

const useStyles = makeStyles({
  card: {
    maxWidth: "300px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    rowGap: "1rem",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    rowGap: "0.5rem",
  },
});

const FilterCard = () => {
    const styles = useStyles();
    const [genre, setGenre] = useState<string[]>([]);
    const [language, setLanguage] = useState<string[]>([]);

    const handleToggle = (value: string, group: "genre" | "language") => {
        const state = group === "genre" ? genre : language;
        const setter = group === "genre" ? setGenre : setLanguage;
        if (state.includes(value)) {
        setter(state.filter((v) => v !== value));
        } else {
        setter([...state, value]);
        }
    };
    const wrapperStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
    };
    const [checked, setChecked] = React.useState(false);
    const onChange = React.useCallback(
        (ev: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(ev.currentTarget.checked);
        },
        [setChecked]
    );

  return (
    <Card className={styles.card}>
      <CardHeader header={<Body1Strong>Filtrar por</Body1Strong>} />

      <div className={styles.section}>
        <Body1Strong>Género</Body1Strong>
        <Checkbox
          label="Romance"
          checked={genre.includes("romance")}
          onChange={() => handleToggle("romance", "genre")}
        />
        <Checkbox
          label="Misterio"
          checked={genre.includes("misterio")}
          onChange={() => handleToggle("misterio", "genre")}
        />
      </div>

      <div className={styles.section}>
        <Body1Strong>Idioma</Body1Strong>
        <Checkbox
          label="Español"
          checked={language.includes("es")}
          onChange={() => handleToggle("es", "language")}
        />
        <Checkbox
          label="Inglés"
          checked={language.includes("en")}
          onChange={() => handleToggle("en", "language")}
        />
      </div>
      <div style={wrapperStyle}>
      <Switch
        checked={checked}
        label={`Está en oferta`}
        labelPosition="before"
        onChange={onChange}
      />
      </div>
    </Card>
  );
};

export default FilterCard;