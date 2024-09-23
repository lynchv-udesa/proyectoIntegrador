import React, { Component } from "react";
import "./styles.css"

class Buscador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valorInput1: ''
        }
    }
    
    evitarSubmit(event) {
        console.log(event)
        event.preventDefault()
        this.props.history.push(`/resultados`, {busqueda: this.state.busqueda})
    }

    controlarInputs(event) {
        this.setState({
            valorInput1: event.target.value
        }, () => this.props.filtrarPeliculas(this.state.valorInput1)
        )

    }

    render() {
        return (
            <form onSubmit={(event) => this.evitarSubmit(event)} >
                <input className="barra"
                    onChange={(event) => this.controlarInputs(event)}
                    value={this.state.valorInput1}
                />
                <button className="boton" type='submit'>Enviar</button>
            </form>
        )
    }

}
export default Buscador