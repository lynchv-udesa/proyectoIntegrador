import React, {Component} from "react";

class Buscador extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput1: ''
        }
    }
    evitarSubmit(event){
        event.preventDefault()
        console.log(event)
    }
    controlarInput(event){
        this.setState({
            valorInput1: event.target.value
        }, () => this.props.filtrarPeliculas(this.state.valorInput1))
        
    }
    filtrarPeliculas(nombrePelicula){
        const peliculasFiltradas = this.state.peliculas.filter((elm) => elm.title.toLowerCase().includes(nombrePelicula.toLowerCase()))
        this.setState({
            peliculas: peliculasFiltradas
        })
   }
    render() {
        return (
            <form onSubmit={() => this.evitarSubmit}>
                <input onChange={(event) => this.controlarInput(event)} value={this.state.valorInput1} />
                <button>Enviar</button>
            </form>
        )
    }
}
export default Buscador