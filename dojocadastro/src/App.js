import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Clientes from './pages/ClientesCadastrados';
import NotFound from './pages/LoginNotFound';


class  App extends React.Component {

  render() {
  return (
    <div>
      <h1>Nosso Dojo</h1>
      <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/login" component={ Login } />
      <Route path="/clients" component={ Clientes } />
      <Route component={ NotFound } />
    </Switch>
    </div>
   );
 }
}

export default App;
