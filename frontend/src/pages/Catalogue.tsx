import Product from "../components/Product";

const Catalogue = () => {
    const prodInfo: {image: string, title: string, link: string} = 
        {
            image: "/images/carousel1.jpg",
            title: "Producto 1",
            link: "/"
        };
    return (
        <>
            <h2>Catalogue</h2>
            <Product image= {prodInfo.image} title={prodInfo.title} link={prodInfo.link}/>
        </>
    );
};

export default Catalogue;