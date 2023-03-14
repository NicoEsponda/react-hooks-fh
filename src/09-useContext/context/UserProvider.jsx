import { useState } from "react"
import { UserContext } from "./UserContext"

const user = {
    id: 123,
    name: 'Fernando Herrera',
    email: 'fernando@google.com'
}



export const UserProvider = ({ children }) => {

    // const [user, setUser] = useState();

    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        //? Basicamente si agrego el hola:"mundo" en value no aparece a menos que baje el proyecto
        //? y lo vuelva a levantar, lo mismo si comento la const user, no refleja cambios al recargar la pag.
        //? Probe con el codigo de fernando y le funciona bien estando igual :(, no se si sera por alguna cambio en la version
        <UserContext.Provider value={{ user }}>
            { children }
        </UserContext.Provider>
    )
}
