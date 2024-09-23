import React, {Component} from "react";
import Tarjeta from "../components/Tarjeta";

const apikey = '95758cce3c3e961388ca0ab2eaf4d664'

class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculasFav: []
        }
    }

    componentDidMount(){
        let favoritos = localStorage.getItem("peliculasFavs")
        if (favoritos !== null){
            let favoritosParseado = JSON.parse(favoritos)

            Promise.all(
                favoritosParseado.map(elm =>
                fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=${apikey}`)
                .then((resp) => resp.json())
                .catch((err) => console.log(err))
                )
            )
            .then(data => this.setState({peliculasFav: data}, () => console.log("peliculas faovritas", this.state.peliculasFav)))
            .catch((err) => console.log(err))
        }
    }

    render(){
        return(
            <React.Fragment>  
                <h1>Favoritos</h1> 
                <section className='contenedor-pelicula'>
                {
                    this.state.peliculasFav.length > 0 ?
                    this.state.peliculasFav.map((elm , idx) => <Tarjeta key={elm.id + idx} data={elm} vermas={false} />
                    )
                    : <h1>No hay peliculas favoritas</h1>
                }
                </section>
            </React.Fragment>
        )
    }
}

export default Favoritos