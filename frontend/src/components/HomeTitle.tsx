// src/components/AnimatedTitle/AnimatedTitle.tsx
import { useEffect, useState } from "react";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  wrapper: {
    fontSize: "3rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: "2rem",
    animation: "fadein 1s ease-in-out",
  },
  word: {
    marginRight: "0.5rem",
    transition: "opacity 0.5s ease-in-out",
  },
  "@keyframes fadein": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

const variants = ["Shu", "书", "書"];

const HomeTitle = () => {
  const styles = useStyles();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % variants.length);
    }, 2000);
    return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.wrapper}>
        <span className={styles.word}>{variants[index]}</span>& Books
        </div>
    );
};

export default HomeTitle;