/**
* Basic JSON response for Controllers
* Los 'types' propios serán tipos complejos personalizados, de esta manera va a hacer mucho más
* fácil controlar qué es lo que nos va a devolver por ejemplo una promesa. En vez de devolvernos un objeto de tipo any.
*/

export type BasicResponse = {
    message: string;
}

export type ErrorResponse = {
    error: string,
    message: string
}

export type AuthResponse = {
    message: string,
    token: string
}