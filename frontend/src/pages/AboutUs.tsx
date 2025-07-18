import ProjectDetailsCard from "../components/ProjectDetailsCard";
import TimelineCard from "../components/TimeLineCard";
import QuoteCard from "../components/QuoteCard";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    padding: "2rem",
  },
});

const AboutUs = () => {
    const styles = useStyles();

    return(
        <div className={styles.page}>
        <ProjectDetailsCard />
        <TimelineCard />
        <QuoteCard />
      </div>
    );
};

export default AboutUs;