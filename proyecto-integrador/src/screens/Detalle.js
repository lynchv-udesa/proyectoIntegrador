import React from "react";
import Pelicula from "../components/Pelicula";

function Detalle(props) {
    return(
        <div> 
            <React.Fragment>  
                <h1>Detalle</h1>   
                <Pelicula id={parseInt(props.match.params.id)}/>     
            </React.Fragment>
        </div>
    )
}

export default Detalle