import CategoryCard from "../components/CategoryCard.tsx";


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
                así que por el momento este será*/}
                {/*<div className="hero-fullscreen">*/}
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
                {/*</div>*/}
            
                {/*For the moment this is all the Home page. I will improve this in the future*/}
            
                
            </div>
        </>
    );
};

export default Home;
