import React, {Component} from "react";
import Tarjeta from "../Tarjeta";
import {Link} from 'react-router-dom';

const apikey = '95758cce3c3e961388ca0ab2eaf4d664'

class PeliEstreno extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: []
        }
        console.log('constructor')
    }
    componentDidMount(){
        console.log('did mount')
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setTimeout(()=> this.setState ({
                peliculas: data.results.slice(0,5)
            }), 2000)
            
        })
        .catch((err) => console.log(err))
    }
    componentDidUpdate(){
        console.log('did update')
        
    }
    componentWillUnmount(){
        console.log('did unmount')
    }
   filtrarPeliculas(nombrePelicula){
        const peliculasFiltradas = this.state.peliculas.filter((elm) => elm.title.toLowerCase().includes(nombrePelicula.toLowerCase()))
        this.setState({
            peliculas: peliculasFiltradas
        })
   }
    render() {
        console.log('render')
        return (
            <div>

                {
                    this.state.peliculas.length > 0
                    ?
                    <section className='contenedor-pelicula'>
                    { 
                        this.state.peliculas.map((elm , idx) => <Tarjeta key={elm.id + idx} data={elm} vermas={false} />) 
                    }
                    <Link to={`/estrenos`}>
                    <h4>Ver todos los Estrenos</h4>
                    </Link>
                    </section>

                    :

                    <section className='contenedor-pelicula'>
                    <img className="gif" src="/img/gif3.gif" alt="Cargando..." />
                    </section>
                }
        
            </div>
        )
    }
}
export default PeliEstreno