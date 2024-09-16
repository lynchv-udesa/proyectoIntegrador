import React from 'react'
import {Link} from 'react-router-dom'

function Opcion(props) {
  const data = props.data
  return (

    <Link to={data.ruta} >
                <article className="navs">
                    <p>{data.nombre}</p>
                </article>
    </Link>
  )
}
export default Opcion