import React from "react";
import PeliPopular from "../components/PeliPopular";
import Buscador from "../components/Buscador";

function Home(){
    return(
        <div> 
            <React.Fragment>
                <h1>Home</h1>
                <Buscador/>
                <PeliPopular/>           
            </React.Fragment>
        </div>
        
    )
}

export default Home