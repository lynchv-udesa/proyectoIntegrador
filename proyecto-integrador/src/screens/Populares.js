import React from "react";
import MasPelisPopulares from "../components/MasPelisPopulares";
import Footer from '../components/Footer/index'


function Populares(){
    return(
        <div> 
            <React.Fragment>  
                <h1>Populares</h1>        
                <MasPelisPopulares/> 
            </React.Fragment>
        </div>
    )
}

export default Populares