import React, {Component} from "react";
import Buscador from "../Buscador";

const apikey = '95758cce3c3e961388ca0ab2eaf4d664'

class PeliPopular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: []
        }
        console.log('constructor')
    }
    componentDidMount(){
        console.log('did mount')
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setTimeout(()=> this.setState ({
                peliculas: data.results
            }), 3000)
            
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
               <Buscador filtrarPeliculas={(nombre) => this.filtrarPeliculas(nombre)}/>
                {
                    this.state.peliculas.length > 0 ?
                    this.state.peliculas.map((elm) => <h1>{elm.title}</h1>) :
                    <h1>Cargando</h1>
                }
            </div>

        )
    }
}
export default PeliPopular