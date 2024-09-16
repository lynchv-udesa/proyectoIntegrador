import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Popular extends Component {
  constructor(props) {
      super(props)
      this.state = {
          vermas: props.vermas,
          textoBoton: "Ver más",
      }
  }

  vermas(){
    this.setState({
      vermas: !this.state.vermas,
      textoBoton: this.state.vermas ? "Ver Más" : "Ver Menos"
    })
  }

  render(){
    let {id, title, poster_path, overview} = this.props.data
    console.log('props', this.props)
    return (
      <div className="character-card">
        <Link to={`/rickandmorty/id/${id}`}>
          <img className="imagen-personaje" src={poster_path} alt={title} />
          <h4>{title}</h4>
        </Link>  

          { this.state.vermas === true 
          ? 
          <section className='extra'>
              <p>{overview} </p> 
          </section>
          : 
          null }   
          <button className="more" onClick = {() => this.vermas()}> {this.state.textoBoton} </button>

          <button className="delete"> Agregar a Favoritos </button>
      </div>
    )
  }
}

export default Popular;