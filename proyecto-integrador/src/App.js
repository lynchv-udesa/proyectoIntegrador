import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Header from './components/Header';
import Populares from './screens/Populares';
import Footer from '../src/components/Footer/index'

function App() {
  console.log('Estas son las props de la Aplicacion');
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/populares' component={Populares} />
      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
