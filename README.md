# Proyecto ShuAndBooks

# Desarrollo de un sitio web con el stack MERN con TS.

En este proyecto iré realizando una tienda con operaciones CRUD con el objetivo de aprender el 
stack. Iré anotando los pasos que voy haciendo, las dependecias que uso y para qué sirven.

El proyecto se basa en el curso de MERN de OpenBootCamp:
https://www.youtube.com/playlist?list=PLkVpKYNT_U9erM5pz0t-YBdJtK1TI9YF6

También iré proporcionando los errores que me van ocurriendo durante el desarrollo junto con 
pequeñas explicaciones.

# BackEnd

## Errores

### Implementación de middlewares en las rutas
verifyToken.ts: Se modificó la función `verifyToken` para asegurar que, en caso de error
(token no proporcionado o verificación fallida), la función envíe la respuesta de error y
luego retorne explícitamente, evitando así problemas de incompatibilidad de tipos con Express.
Se pasó de esto:
    if (!token) {
        return res.status(403).send({
            message: 'No token provided. No permission to access.'
        });
    }
a esto:
    if (!token) {
        res.status(403).send({
            message: 'No token provided. No permission to access.'
        });
        return; // Añadido para asegurar el retorno explícito
    }
Similar con checkRole.ts.
Estos cambios resuelven los errores de incompatibilidad de tipos que surgían al usar los
middlewares en las rutas de Express, asegurando que las funciones de middleware se comporten
como se espera en términos de flujo de control y tipos de retorno.        

## Códigos en Status 

## Middleware 
Es como el pegamento que une distintas partes de una aplicación. En el desarrollo de software, 
especialmente en entornos como Node.js o frameworks como Express, un middleware es una función 
que se ejecuta entre la petición del cliente y la respuesta del servidor. Se encarga de tareas 
que no forman parte del núcleo de la lógica del negocio, pero son fundamentales para que todo 
funcione correctamente.

📚 ¿Qué puede hacer un middleware?
Autenticación y autorización: verifica si el usuario tiene permisos para acceder a ciertos recursos.

Logging: registra actividad para diagnóstico o auditoría.
Transformación de datos: como convertir JSON en objetos utilizables.

Gestión de errores: captura y maneja fallos antes de enviar una respuesta.

CORS y headers: configura qué dominios pueden hacer peticiones

## Autenticación

### BCRYPT

Se usó en en /util/hash.ts para hashear una contraseña y compararla.
🔄 ¿Usar bcrypt o bcryptjs?
🔹 bcrypt
Es un módulo nativo que depende de bindings C++, lo cual lo hace más rápido y robusto.
Pero puede dar problemas al instalar o compilar en algunos entornos (especialmente en Windows o servidores sin build tools).

🔸 bcryptjs
Es una implementación 100% en JavaScript.
Es más fácil de instalar y no tiene dependencias nativas.
Un poco más lento, pero para proyectos pequeños o educativos está más que bien.

## Paginoción

# FrontEnd