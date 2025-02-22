import Carousel from 'react-bootstrap/Carousel';

interface CarouselProps {
    images: { src: string; alt: string }[];
}

const CarouselWelcome = ({images}: CarouselProps)=> {
    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key = {index}>
                    <img className= "d-block w-100" src={image.src} alt={image.alt} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CarouselWelcome;