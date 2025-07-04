import { useState } from "react";
import AddProfile from "../components/AddProfile";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Datos para enviar al backend:", { email, pass });
        //Acá tendría que hacer la petición al backend, en proceso
        //pero por ahora solo lo imprimo en consola
    };

    return (
        <>
            <h1>Registrarse</h1>
            <AddProfile
                name={name}
                lastName={lastName}
                email={email}
                pass={pass}
                password={password}
                onNameChange={setName}
                onLastNameChange={setLastName}
                onEmailChange={setEmail}
                onPassChange={setPass}
                onPasswordChange={setPassword}
                onSubmit={handleSubmit}
            />
        </>
    );
    
};

export default SignIn;