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
            <div className="buscador">
                <form onSubmit={(event) => this.evitarSubmit(event)} >
                    <input className="barra" value={this.state.busqueda} onChange={(event) => this.cambioInput(event) } />
                    <button className="boton" type='submit'>Buscar</button>
                </form>
            </div>
        )
    }

}
export default Buscador