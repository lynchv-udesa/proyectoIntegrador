import React, { Component } from "react";
import Tarjeta from "../components/Tarjeta";
const Apikey =`95758cce3c3e961388ca0ab2eaf4d664`;
export default class Resultados extends Component{
    constructor(props){
        super(props)
        this.state = {resultados: []}
    }

    componentDidMount(){
        const loQueBuscaElUsuario = this.props.history.location.state.busqueda
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${Apikey}&query=${loQueBuscaElUsuario}`)
        .then(resp => resp.json())
        .then((data) => {
            console.log(`buscado`,data)
            this.setState({resultados: data.results})
        })
        .catch((err) => console.log(err))
    }

    render(){
        return (
            <div>
                {
                    this.state.resultados.length > 0 ?
                        this.state.resultados.map((elm , idx) => <Tarjeta key={elm.id + idx} data={elm} vermas={false} />)
                    :
                     <h1>No hay resultados que mostrar</h1>
                }
                <h1>Resultados</h1>
            </div>
        )
    }
}