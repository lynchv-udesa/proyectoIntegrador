import React from "react";
import Opcion from "../Opciones/index";
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
        nombre: "Populares",
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