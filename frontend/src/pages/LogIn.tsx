import { useState } from "react";
import LogInCard from "../components/LogInCard";

const LogIn=() => {
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Datos para enviar al backend:", { email, pass });
        //Acá tendría que hacer la petición al backend, en proceso
        //pero por ahora solo lo imprimo en consola
    };
    return (
        <div className="login-view">
            <h2>Iniciar Sesión</h2>
            <LogInCard 
                email={email}
                pass={pass}
                onEmailChange={setEmail}
                onPassChange={setPassword}
                onSubmit={handleSubmit}
            />
        </div>
    )
};

export default LogIn;