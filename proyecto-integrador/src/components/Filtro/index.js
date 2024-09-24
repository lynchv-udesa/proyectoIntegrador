import React, {Component} from "react";

class Filtro extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput1: ''
        }
    }
    evitarSubmit = (event) => {
        event.preventDefault();
    }

    

    controlarInput(event){
        this.setState({
            valorInput1: event.target.value
        }, () => this.props.filtrarPeliculas(this.state.valorInput1))
    }

    render() {
        return (
            <form onSubmit={this.evitarSubmit}>
                <input onChange={(event) => this.controlarInput(event)} value={this.state.valorInput1} />
                <button>Enviar</button>
            </form>
        )
    }
}
export default Filtro