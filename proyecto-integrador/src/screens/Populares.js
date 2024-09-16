import React from "react";
import PeliPopular from "../components/PeliPopular";
import Footer from '../components/Footer/index'


function Populares(){
    return(
        <div> 
            <React.Fragment>  
                <h1>Populares</h1>        
                <PeliPopular/> 
            </React.Fragment>
        </div>
        
    )
}

export default Populares