import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import NovaPagina from './teste'; // Importe o componente da nova página

function Roteamento() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/nova" component={NovaPagina} /> {/* Defina a rota para a nova página */}
      </Switch>
    </Router>
  );
}

export default Roteamento;
