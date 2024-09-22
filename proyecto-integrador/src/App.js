import React from "react"
import {Switch, Route} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer'

import Home from './screens/Home';
import Populares from './screens/Populares';
import Estrenos from './screens/Estrenos';
import Detalle from './screens/Detalle';
import Favoritos from './screens/Favoritos';
import Resultados from './screens/Resultados';
import NotFound from './screens/NotFound';
import VerTodasEstreno from "./screens/VerTodasEstreno";
import VerTodasPopular from "./screens/VerTodasPopulares";

function App() {
  console.log('Estas son las props de la Aplicacion');
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/populares' component={Populares} />
        <Route path='/estrenos' component={Estrenos} />
        <Route path='/detalle/:id' component={Detalle} />
        <Route path='/favoritos' component={Favoritos} />
        <Route path='/resultados' component={Resultados} />
        <Route path='/verTodasEstreno' component={VerTodasEstreno} />
        <Route path='/verTodasPopulares' component={VerTodasPopular} />
        <Route path='' component={NotFound} />
      </Switch>
      <Footer/>
    </>

  );
}

export default App;
