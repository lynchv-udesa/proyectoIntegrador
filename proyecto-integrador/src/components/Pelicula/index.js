import React, {Component} from "react";
import "./styles.css"

const apikey = '95758cce3c3e961388ca0ab2eaf4d664'

class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pelicula: []
        }
    }

    componentDidMount(){
        console.log('did mount')
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=${apikey}`)
        .then((resp) => resp.json())
        .then((data) => {
            this.setState ({
                pelicula: data
            })
        })
        .catch((err) => console.log(err))
    }

    render() {
        console.log("pelicula", this.state.pelicula)
        return ( 
            <section className='detalle-contenedor'>
                <img className="detalle-imagen" src={'https://image.tmdb.org/t/p/w342/'+this.state.pelicula.poster_path} alt={this.state.pelicula.title} />
                <div className="detalle-info">
                    <h3>{this.state.pelicula.title}</h3>
                    <p><strong>Sinopsis:</strong><br />{this.state.pelicula.overview}</p>
                    <p><strong>Fecha de estreno:</strong><br />{this.state.pelicula.release_date}</p>
                    <p><strong>Duración:</strong><br />{this.state.pelicula.runtime}</p>
                    <button className="detalle-favoritos"><i className="fa-regular fa-heart"></i></button> 
                </div>
            </section>
        )
    }
}
export default Detalle
