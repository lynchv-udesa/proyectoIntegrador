import React from "react";
import PeliPopular from "../components/PeliPopular";
import Buscador from "../components/Buscador";
import PeliEstreno from "../components/PeliEstreno";

function Home(props){
    return(
        <div> 
            <React.Fragment>
                <h1>Home</h1>
                <Buscador history={props.history}/>
                <h2>Populares</h2>
                <PeliPopular/> 
                <h2>Estrenos</h2>
                <PeliEstreno/>      
            </React.Fragment>
        </div>
        
    )
}

export default Home