import { useState } from "react";
//import LogInCard from "../components/LogInCard";
import LogInFluent from "../components/LogInFluent";
import api from '../utils/axios.config';
import { useNavigate } from "react-router-dom";

/*
    Esta vista es la encargada de mostrar el formulario de inicio de sesión.
    Recibe los datos del formulario y los envía al backend para el inicio de sesión.
    Hago uso de useState de react para guardar los cambios en los campos de email, password y error.
    Hago uso de useNavigate de react-router-dom para redirigir al usuario al perfil por fuera del componente
    LogInCard.tsx.
*/

const LogIn=() => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    /*
    Acá hago la petición al backend para el inicio de sesión
    no tengo claro qué tan correcto es usar la petición al backend desde una vista,
    por ahora quedará acá.
    */

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            /*
             Acá hago uso de axios, recomendación de DeepSeek. Aún no lo entiendo bien, así que queda pendiente para aprender.
            */
            const response = await api.post('/auth/login', { email: email, password: password })

            const { token, user } = response.data;

            // Guarda el token en localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
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
            <LogInFluent 
                email={email}
                password={password}
                error={error}
                onEmailChange={setEmail}
                onPasswordChange={setPassword}
                onSubmit={handleSubmit}
            />
        </div>
    )
};

export default LogIn;