import React from "react";
import {Link} from 'react-router-dom';
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
                navs.map((elm, idx) => <Navbar key={elm.nombre + idx} data={elm} /> )
               }
            </ul>
            <Link to={`/`}>
                <img className="logo" src="/img/logo.png" alt="Michi Movie" />
            </Link>
            
        </nav>
    )
} 

export default Header