/*import CategoryCard from "../components/CategoryCard.tsx";


const Home = () => {

    const categorys: {src: string; title: string, link: string}[] = [
        {
            src: "/images/wind.png",
            title: "VIENTOS",
            link: "/",
        },
        {
            src: "/images/guitars.png",
            title: "GUITARRAS",
            link: "/",
        },
        {
            src: "/images/percussion.png",
            title: "PERCUSIÓN",
            link: "/quienes-somos",
        },
    ];
    return (
        <>
            <div className="hero-fullscreen">
                {/*Aún no me decido por los colores de la pagina
                así que por el momento este será
                {/*<div className="hero-fullscreen">
                    <div className="hero-content">
                        <h1>Bienvenido a Soundscape</h1>
                        <p>Tu tienda de música favorita</p>
                        <h1>Nuestras categorias</h1>

                        <div className="d-flex gap-3 justify-content-center">
                            {categorys.map((cat, index) => (
                                <CategoryCard key={index} image={cat.src} title={cat.title} link={cat.link} />
                            ))}
                        </div>
                    </div>
                {/*</div>
            
                {/*For the moment this is all the Home page. I will improve this in the future
            
                
            </div>
        </>
    );
};*/
import HomeTitle from "../components/HomeTitle.tsx";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    height: "100vh",
    background: "linear-gradient(135deg, #5B3E96, #A377D1)",
    color: "white",
  },
  left: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  right: {
    flex: 1,
  },
});

const Home = () => {
  const styles = useStyles();

  return (
      <div className={styles.container}>
        <div className={styles.left}>
          <HomeTitle />
        </div>
        <div className={styles.right}>
          {/* Podés agregar una imagen, ilustración o dejarlo vacío */}
        </div>
      </div>
  );
};

export default Home;
