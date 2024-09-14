import React from 'react'
//import {Link} from 'react-router-dom'

function Opcion(props) {
  const ruta = props.data.ruta
  return (

    <article className="card">
        <p>{props.data.nombre}</p>
    </article>
    //<Link to={`${ruta}`} >
      //          
       // </Link>
  )
}
export default Opcion