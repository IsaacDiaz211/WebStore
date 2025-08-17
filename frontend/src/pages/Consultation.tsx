
import ConsultationCard from "../components/ConsultationCard";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
    wrapper: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem",
  },
});

const Consultation = () => {
    const styles = useStyles();
    return (
        <div className={styles.wrapper}>
            <h2>Bienvenido a Consultas</h2>
            <ConsultationCard />
        </div>
    )
};

export default Consultation;