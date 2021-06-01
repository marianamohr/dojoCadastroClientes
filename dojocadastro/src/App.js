import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Clientes from './pages/ClientesCadastrados';
import NotFound from './pages/LoginNotFound';
import { Link } from 'react-router-dom';


class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHome = () =>  (<Home />)
  
  renderLogin = () => (<Login />)

  renderClients = () => (<Clientes />)

  renderRotes = () => {
    return ( 
    <Switch>
        <Route exact path="/" render={({ match }) => this.renderHome(match) }/>
        <Route path="/login" render={ ({ match }) => this.renderLogin(match) } />
        <Route path="/clients" render={ ({ match }) => this.renderClients(match) } />
        <Route component={ NotFound } />
    </Switch>
    )
  }

  render() {
  return (
    <section>
      <h1>Nosso Dojo</h1>
      <Link to="/">Home</Link>
      {this.renderRotes()}
    </section>
  )
  }
}

export default App;
