import GeneralTable from "../components/GeneralTable";
import Button from "react-bootstrap/Button";
const Cart = () => {
    return (
        <>
            <h2>Bienvenido a Carrito</h2>
            <GeneralTable/>
            <Button variant="primary">Comprar</Button>
        </>
    );
};

export default Cart;