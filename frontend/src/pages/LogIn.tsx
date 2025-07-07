import { useState } from "react";
import LogInCard from "../components/LogInCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogIn=() => {
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    /*const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Datos para enviar al backend:", { email, pass });
        //Acá tendría que hacer la petición al backend, en proceso
        //pero por ahora solo lo imprimo en consola
        // Aquí lo dejo mientras trato de probar consumir una api por primera vez*/

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("[DEBUG] handleSubmit ejecutado");
        try {
            // Opción 2: Con axios (más limpia según DeepSeek, ya lo veremos)
            /*const response = await axios.post(
                 'http://localhost:8000/api/auth/login', 
                 { email, password: pass }
            );*/
            const response = await axios.post('/api/auth/login', { email, password: pass }) // Sin "http://localhost:8000"

            const { token, user } = response.data;

            // Guarda el token en localStorage
            localStorage.setItem('token', token);
            console.log('Login exitoso:', user);
            
            // Redirige al usuario al perfil
            navigate('/perfil');

        } catch (err: unknown) {
            const axiosError = err as { response?: { data?: { message?: string } } };
            // Axios encapsula el error en err.response
            const errorMessage = axiosError.response?.data?.message || 'Credenciales incorrectas';
            setError(errorMessage);
            console.error('Error en login:', errorMessage);
        }
    };
    return (
        <div className="login-view">
            <h2>Iniciar Sesión</h2>
            <LogInCard 
                email={email}
                pass={pass}
                error={error}
                onEmailChange={setEmail}
                onPassChange={setPassword}
                onSubmit={handleSubmit}
            />
        </div>
    )
};

export default LogIn;