import React, {Component} from "react";
import Buscador from "../Buscador";
import Popular from "../Popular";

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
              
              <section className='card-container'>
                {
                    this.state.peliculas.length > 0
                    ?
                    this.state.peliculas.map((elm , idx) => <Popular key={elm.id + idx} data={elm} vermas={false} />) 
                    : <h1>Cargando</h1>
                }
            </section>
            </div>

        )
    }
}
export default PeliEstreno