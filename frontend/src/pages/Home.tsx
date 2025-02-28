import CarouselWelcome from "../components/CarouselWelcome.tsx";
import CategoryCard from "../components/CategoryCard.tsx";


const Home = () => {

    const carouselImages: {src: string; alt: string}[] = [
        {
            src: "/images/carousel1.jpg",
            alt: "Foto 1 del Carrusel",
        },
        {
            src: "/images/carousel2.jpg",
            alt: "Foto 2 del Carrusel",
        },
        {
            src: "/images/carousel3.jpg",
            alt: "Foto 3 del Carrusel",
        },
    ];

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
            <CarouselWelcome images={carouselImages}/>

            <h1>Nuestras categorias</h1>

            <div className="d-flex gap-3 justify-content-center">
                {categorys.map((cat, index) => (
                    <CategoryCard key={index} image={cat.src} title={cat.title} link={cat.link} />
                ))}
            </div>
        </>

    );
};

export default Home;
