import CarouselWelcome from "../components/CarouselWelcome.tsx";

const Home = () => {

    const images: {src: string; alt: string}[] = [
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
    return (
        <CarouselWelcome images={images}/>

    );
};

export default Home;
