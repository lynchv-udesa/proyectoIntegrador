import React from "react";
import Navbar from "../Navbar/index";
import './styles.css'


const navs = [
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
                navs.map((elm) => <Navbar data={elm} /> )
               }
            </ul>
            <img className="logo" src="/img/logo.png" alt="Michi Movie" />
        </nav>
    )
} 

export default Header