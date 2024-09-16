import React, { Component } from "react";
import {Link} from 'react-router-dom'

class MasPopulares extends Component {
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
      <div className="tarjeta-pelicula">
        <Link to={`/detalle/${id}`}>
          <img className="imagen-pelicula" src={'https://image.tmdb.org/t/p/w342/'+poster_path} alt={title} />
          <h4>{title}</h4>
        </Link>  

          { this.state.vermas === true 
          ? 
          <section className='extra-pelicula'>
              <p>{overview} </p> 
          </section>
          : 
          null }   
          <button className="mas-pelicula" onClick = {() => this.vermas()}> {this.state.textoBoton} </button>

          <button className="favoritos-pelicula"><i className="fa-regular fa-heart"></i></button> 
      </div>
    )
  }
}

export default MasPopulares;