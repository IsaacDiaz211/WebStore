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

### Error al incluir 'Bearer' en axios
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    //config.headers.Authorization = `Bearer ${token}`; <-- No funciona
    config.headers.Authorization = `${token}`;          <-- Sí funciona
  }
  return config;
});

## Códigos de estado en HTTP en Status 
¿Qué son los códigos de estado HTTP?
Los códigos de estado HTTP son números de 3 dígitos que un servidor devuelve al cliente (por
ejemplo, un navegador o una app móvil) para indicar el resultado de una solicitud HTTP.
Ayudan a entender si la petición fue exitosa, si hubo errores, o si se requiere alguna acción
adicional.

En el proyecto se usan estos códigos con el método .status(código) antes de enviar la
respuesta con .send() en las rutas.

### Códigos de estado comunes y representativos
200     OK                      Solicitud exitosa, devuelve datos
201     Created                 Recurso creado exitosamente (ej: después de un POST)
204     No Content              Solicitud exitosa, sin contenido que devolver
400     Bad Request             La solicitud tiene un error (datos inválidos, faltantes, etc.)
401     Unauthorized            El usuario no está autenticado
403     Forbidden               El usuario no tiene permisos para acceder al recurso
404     Not Found               El recurso solicitado no existe
500     Internal Server Error   Error del lado del servidor

Más sobre los códigos de estado: https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Status
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

## Paginación

El método `findAll` implementa paginación para consultar usuarios de una base de datos MongoDB
usando Mongoose. Aquí está el desglose:

1. Parámetros de entrada:
   - `page`: Número de página actual (empezando desde 1)
   - `max`: Cantidad máxima de resultados por página

2. Estructura de respuesta:
   ```typescript
   type PaginatedUserResponse = {
     users: IUser[];    // Lista de usuarios en la página actual
     totalPages: number; // Total de páginas disponibles
     currentPage: number // Página actual
   }
   ```

3. Lógica de paginación:

   - `limit(max)`: Limita los resultados a `max` documentos por consulta
   - `skip((page - 1) * max)`: Salta los documentos de las páginas anteriores
     - Ejemplo: Si `page=2` y `max=10`, salta los primeros 10 resultados

4. **Cálculo del total de páginas**:
   ```typescript
   Math.ceil(count / max)
   ```
   - `count`: Total de documentos en la colección
   - Divide por `max` y redondea hacia arriba para obtener el total de páginas

Flujo completo:

1. Prepara un objeto de respuesta inicial vacío
2. Ejecuta la consulta con:
   - `skip()` para saltar a la página correcta
   - `limit()` para obtener solo los elementos de esa página
3. Cuenta el total de documentos para calcular:
   - Total de páginas disponibles
   - Página actual
4. Retorna la estructura paginada con:
   - Los usuarios de la página actual
   - Metadatos de paginación

## Cors

## Cloudinary

### Módulo 'uuid'

El módulo 'uuid' sirve para generar identificadores únicos universales (UUIDs). En concreto
cuando ves import { v4 as uuidv4 } from 'uuid';, se está trayendo la función que crea UUIDs de
versión 4, que son completamente aleatorios.
En el contexto de subir una imagen a Cloudinary, uuidv4() se suele usar para generar un nombre
de archivo único, como parte del public_id, evitando colisiones entre imágenes que podrían
tener el mismo nombre original.

# FrontEnd

## Fluent 2

## Axios