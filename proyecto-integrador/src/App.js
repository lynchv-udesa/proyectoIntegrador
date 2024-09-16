import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Header from './components/Header';
import Footer from '../src/components/Footer/index'

import Populares from './screens/Populares';
import Estrenos from './screens/Estrenos';
import Detalle from './screens/Detalle';
import Favoritos from './screens/Favoritos';
import Resultados from './screens/Resultados';
import NotFound from './screens/NotFound';

function App() {
  console.log('Estas son las props de la Aplicacion');
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/populares' component={Populares} />
        <Route path='/estrenos' component={Estrenos} />
        <Route path='/detalle/:id' component={Detalle} />
        <Route path='/favoritos' component={Favoritos} />
        <Route path='/resultados' component={Resultados} />
        <Route path='' component={NotFound} /> 
      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
