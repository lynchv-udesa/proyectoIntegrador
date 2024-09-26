import React, { Component } from "react";
import Tarjeta from "../Tarjeta";
import Filtro from "../Filtro";

const apikey = '95758cce3c3e961388ca0ab2eaf4d664'

class MasPelisEstreno extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            backuppeliculas: [],
            paginaACargar: 2
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setTimeout(() => this.setState({
                    peliculas: data.results,
                    backuppeliculas: data.results
                }), 2000)

            })
            .catch((err) => console.log(err))
    }
    componentDidUpdate() {
        console.log('did update')

    }
    componentWillUnmount() {
        console.log('did unmount')
    }

    filtrarPeliculas(nombrePelicula) {
        const peliculasFiltradas = this.state.backuppeliculas.filter((elm) => elm.title.toLowerCase().includes(nombrePelicula.toLowerCase()))
        this.setState({
            peliculas: peliculasFiltradas
        })
    }

    cargarMas() {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&page=${this.state.paginaACargar}`)
            .then(resp => resp.json())
            .then((data) => {
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    paginaACargar: this.state.paginaACargar + 1,
                    peliculasBacakup: this.state.peliculas.concat(data.results),
                })
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                    {
                        this.state.peliculas.length > 0 
                            ?
                            <section>
                            <h1>Estrenos</h1>
                            <Filtro filtrarPeliculas={(nombre)=> this.filtrarPeliculas(nombre)}/>
                            <section className='contenedor-pelicula'>
                            {
                                this.state.peliculas.map((elm, idx) => <Tarjeta key={elm.id + idx} data={elm} vermas={false} />)
                            }
                            {
                                this.state.paginaACargar < 200 
                                ?
                                <button className="vermas" onClick={() => this.cargarMas()}>
                                    <i class="fa-solid fa-arrow-down"></i>
                                </button>
                                :
                                ``
                            }
                            </section>
                            </section>
                            
                            : 
                            
                            <section className='contenedor-pelicula'>
                            <img className="gif gif-mas" src="/img/gif3.gif" alt="Cargando..." />
                            </section>
                    }
            </div>

        )
    }
}
export default MasPelisEstreno