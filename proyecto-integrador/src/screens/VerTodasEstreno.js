import React from "react";
import VerTodasPeliEstreno from "../components/VerTodasPeliEstreno";
import Buscador from "../components/Buscador";

function VerTodasEstreno(){
    return(
        <div> 
            <React.Fragment>
                <Buscador/>
                <h1>Todas las peliculas en estreno</h1>
                <VerTodasPeliEstreno/>
            </React.Fragment>
        </div>
        
    )
}

export default VerTodasEstreno