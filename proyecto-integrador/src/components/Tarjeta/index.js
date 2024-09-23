import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./styles.css";

// Me trae las peliculas

class Tarjeta extends Component {
  constructor(props) {
      super(props)
      this.state = {
          vermas: props.vermas,
          textoBoton: "Ver más",
          esFavorito: false
      }
  }

componentDidMount(){
    let favoritos = localStorage.getItem("peliculasFavs")
    if(favoritos !== null){
        let favoritosParseado = JSON.parse(favoritos)
        let incluido = favoritosParseado.includes(this.props.data.id)
        if(incluido){
            this.setState({
                esFavorito: true
            })
        } 
    }
}

agregarAFavoritos(id){
    let favoritos = localStorage.getItem("peliculasFavs") // No importa si existe o no. Devuelve null o el valor.
    if (favoritos !== null) {
        let favoritosParseado = JSON.parse(favoritos)
        favoritosParseado.push(id)
        let favoritosStringificado = JSON.stringify(favoritosParseado)
        localStorage.setItem("peliculasFavs", favoritosStringificado)
        
    } else {
        let favoritos = [id]
        let favoritosStringificado = JSON.stringify(favoritos)
        localStorage.setItem("peliculasFavs", favoritosStringificado)
    }

    this.setState({
        esFavorito: true
    })
}

sacarDeFavoritos(id){
    let favoritos = localStorage.getItem("peliculasFavs") 
    if (favoritos !== null) {
        let favoritosParseado = JSON.parse(favoritos)
        let favoritosSin = favoritosParseado.filter(fav => fav !== id)
        localStorage.setItem("peliculasFavs", JSON.stringify(favoritosSin))
    }
    this.setState({
        esFavorito: false
    })
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

          { this.state.esFavorito 
            ? 
                <button onClick={() => this.sacarDeFavoritos(id)} className="favoritos-pelicula"><i className="fas fa-heart"></i></button> 
            : 
                <button onClick={() => this.agregarAFavoritos(id)} className="favoritos-pelicula"><i className="fa-regular fa-heart"></i></button> 
          }
      </div>
    )
  }
}                    

export default Tarjeta;