import React, { Component } from "react";
import Tarjeta from "../Tarjeta";

const apikey = '95758cce3c3e961388ca0ab2eaf4d664'

class MasPelisEstreno extends Component {
    constructor(props) {
        super(props)
        this.state = {
            limite: 10,
            peliculas: [],
            verMas: false,
            paginaACargar: 2,
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`)
            .then((resp) => resp.json())
            .then((data) => {
                setTimeout(() => this.setState({
                    peliculas: data.results
                }), 3000)

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
        const peliculasFiltradas = this.state.peliculas.filter((elm) => elm.title.toLowerCase().includes(nombrePelicula.toLowerCase()))
        this.setState({
            peliculas: peliculasFiltradas
        })
    }

    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&page=${this.state.paginaACargar}`)
        .then(resp => resp.json())
        .then((data)=> {
            this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                paginaACargar: this.state.paginaACargar + 1,
                peliculasBacakup: this.state.peliculas.concat(data.results),
            })
        })
        .catch((err)=> console.log(err))
    }

    render() {
        return (
            <div>

                <section className='contenedor-pelicula'>
                    {
                        this.state.peliculas.length > 0
                            ?
                            this.state.peliculas.map((elm, idx) => <Tarjeta key={elm.id + idx} data={elm} vermas={false} />)
                            : <img className="gif" src="/img/gif3.gif" alt="Cargando..." />
                    }
                </section>
                {
                    this.state.paginaACargar < 200 ?
                        <button onClick= {() => this.cargarMas()}>
                        VER MAS
                        </button>
                    :
                    ``
                }
                
            </div>

        )
    }
}
export default MasPelisEstreno