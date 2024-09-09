import React from "react";
import Opcion from "../Opcion";
import './styles.css'

const opciones = [
    {
        nombre:"Home",
        ruta: '/'
    }, 
    {
        nombre: "Favoritos",
        ruta: "/favoritos"
    },
    {
        nombre: "Personajes",
        ruta:"/populares"
    },
    {
        nombre: "Estrenos",
        ruta:"/estrenos"
    }
]

function Header() {
    return(
        <nav>
            <ul className="main-nav">
               {
                opciones.map((elm) => <Opcion data={elm} /> )
               }
            </ul>
            <ul className="user">
                <li>Nombre usuario 
                    <img src="./imgs/user.jpg" alt="" />
                </li>
            </ul>
        </nav>
    )
}

export default Header