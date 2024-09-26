import React, {Component} from "react";
import "./styles.css"

const apikey = '95758cce3c3e961388ca0ab2eaf4d664'

class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pelicula: '',
            esFavorito: false
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${apikey}`)
        .then((resp) => resp.json())
        .then((data) => {
            this.setState ({
                pelicula: data
            })
        })
        .catch((err) => console.log(err))

        let favoritos = localStorage.getItem("peliculasFavs")
        if(favoritos !== null){
            let favoritosParseado = JSON.parse(favoritos)
            let incluido = favoritosParseado.includes(this.props.id)
            if(incluido){
                this.setState({
                    esFavorito: true
                })
            } 
        }
    }

    agregarAFavoritos(id){
        let favoritos = localStorage.getItem("peliculasFavs") // No importa si existe o no. Devuelve null o el valor.
        if (favoritos !== null) {
            let favoritosParseado = JSON.parse(favoritos)
            favoritosParseado.push(id)
            let favoritosStringificado = JSON.stringify(favoritosParseado)
            localStorage.setItem("peliculasFavs", favoritosStringificado)
            
        } else {
            let favoritos = [id]
            let favoritosStringificado = JSON.stringify(favoritos)
            localStorage.setItem("peliculasFavs", favoritosStringificado)
        }

        this.setState({
            esFavorito: true
        })
    }

    sacarDeFavoritos(id){
        let favoritos = localStorage.getItem("peliculasFavs") 
        if (favoritos !== null) {
            let favoritosParseado = JSON.parse(favoritos)
            let favoritosSin = favoritosParseado.filter(fav => fav !== id)
            localStorage.setItem("peliculasFavs", JSON.stringify(favoritosSin))
        }
        this.setState({
            esFavorito: false
        })
    }

    render() {
        console.log(this.state.pelicula)
        console.log("generos", this.state.pelicula.genres)
        return ( 
            <div>
                { 
                    this.state.pelicula === ""
                    ?
                    <img  className="gif" src="/img/gif3.gif" alt="Cargando..."/>
                    :
                    <section className='detalle-contenedor'>
                        { this.state.pelicula.poster_path == null 
                            ?
                            <img className="detalle-imagen" src="/img/sinImagen.png" alt={this.state.pelicula.title} />
                            :
                            <img className="detalle-imagen" src={'https://image.tmdb.org/t/p/w342/'+this.state.pelicula.poster_path} alt={this.state.pelicula.title} />
                        }
                        <div className="detalle-info">
                            <h3>{this.state.pelicula.title}</h3>
                            <p><strong>Sinopsis:</strong><br />{this.state.pelicula.overview}</p>
                            <p><strong>Fecha de estreno:</strong><br />{this.state.pelicula.release_date}</p>
                            <p><strong>Duración:</strong><br />{this.state.pelicula.runtime}</p>
                            { this.state.pelicula.genres.length > 0 
                                ?
                                <p><strong>Género:</strong><br />{this.state.pelicula.genres[0].name}</p>
                                :
                                <p><strong>Género:</strong><br /> - </p>
                            } 

                            <p><strong>Calificación:</strong><br />{this.state.pelicula.vote_average}</p>
                            
                            { this.state.esFavorito 
                            ? 
                                <button onClick={() => this.sacarDeFavoritos(this.props.id)} className="detalle-favoritos"><i className="fas fa-heart"></i></button> 
                            : 
                                <button onClick={() => this.agregarAFavoritos(this.props.id)} className="detalle-favoritos"><i className="fa-regular fa-heart"></i></button> 
                            }
                            
                        </div>
                    </section>
                }   
            </div>
        )
    }
}
export default Detalle