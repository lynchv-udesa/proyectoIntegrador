import React from "react";
import VerTodasPeliPopular from "../components/VerTodasPeliPopular";
import Buscador from "../components/Buscador";

function VerTodasPopular(){
    return(
        <div> 
            <React.Fragment>
                <Buscador/>
                <h1>Todas las peliculas populares</h1>
                <VerTodasPeliPopular/>
            </React.Fragment>
        </div>
        
    )
}

export default VerTodasPopular