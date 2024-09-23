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
        <nav className="header">
            <ul className="navbar">
               {
                opciones.map((elm) => <Opcion data={elm} /> )
               }
            </ul>
            <img className="logo" src="/img/logo.png" alt="Michi Movie" />
        </nav>
    )
} 

export default Header