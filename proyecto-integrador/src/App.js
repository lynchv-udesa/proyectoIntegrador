import Home from './screens/Home';
import {Switch, Route} from 'react-router-dom'
import Populares from './screens/Populares';
import Estrenos from './screens/Estrenos';
import Favoritos from './screens/Favoritos';
import Header from './components/Header';



function App(props) {
  console.log('Estas son las props de la Aplicacion', props)
  return (
    <>
      <Header />
      <Switch >
        <Route path='/' exact={true} component={Home} />
        <Route path='/favoritos' component={Favoritos} />
        <Route path='/populares' component={Populares} />
        <Route path='/estrenos' component={Estrenos} />
        
      </Switch>
      
    </>
  );
}

export default App;