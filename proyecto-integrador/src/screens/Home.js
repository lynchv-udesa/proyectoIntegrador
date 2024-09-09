import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home(){
    return (
        <>
            <React.Fragment>
            <Header/>
            <h1>Peliculas</h1>
            <main>
                <h2>Mas Populares</h2>
                <h2>Estrenos</h2>
            </main>
            <Footer/>
            </React.Fragment>
        </>
    )
}
export default Home