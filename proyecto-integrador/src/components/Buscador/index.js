import React, { Component } from "react";
import "./styles.css"

class Buscador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busqueda: ''
        }
    }
    
    evitarSubmit(event) {
        event.preventDefault()
        this.props.history.push(`/resultados`, {busqueda: this.state.busqueda})
    }

    cambioInput(event) {
        this.setState({
            busqueda: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={(e) => this.evitarSubmit(e)} >
                <input value={this.state.busqueda} onChange={(e) => this.cambioInput(e) } />
                <button className="boton" type='submit'>Buscar</button>
            </form>
        )
    }

}
export default Buscador