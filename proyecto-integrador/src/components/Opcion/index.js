import React from 'react'
import {Link} from 'react-router-dom'

function Opcion(props) {
  const ruta = props.data.ruta
  return (

    <Link to={`${ruta}`} >
                <article className="card">
                    <p>{props.data.nombre}</p>
                </article>
        </Link>
  )
}
export default Opcion