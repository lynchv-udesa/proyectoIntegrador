import React, {Component} from "react";
import Tarjeta from "../Tarjeta";

const apikey = '95758cce3c3e961388ca0ab2eaf4d664'

class MasPelisEstreno extends Component {
    constructor(props) {
        super(props)
        this.state = {
            limite: 10,
            peliculas: [],
            verMas: false,
            textoBoton: "VER MAS"
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

    
    cambiarVerMas(){
        this.setState({
            verMas: !this.state.verMas,
            limite: this.state.verMas ? 20 : 10,
            textoBoton: this.state.verMas ? "VER MENOS" : "VER MAS",
        })
    }

    render() {
        console.log('render')
        return (
            <div>
              
              <section className='contenedor-pelicula'>
                {
                    this.state.peliculas.length > 0
                    ?
                    this.state.peliculas.map((elm , idx) => <Tarjeta key={elm.id + idx} data={elm} vermas={false} />) 
                    : <img  className="gif" src="/img/gif3.gif" alt="Cargando..."/>
                }
            </section>
            <button onClick={() => this.cambiarVerMas()}>
                {this.state.textoBoton}
            </button>
            </div>

        )
    }
}
export default MasPelisEstreno