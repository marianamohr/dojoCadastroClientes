import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Clientes from './pages/ClientesCadastrados';
import NotFound from './pages/LoginNotFound';
import Cadastrar from './pages/Cadastrar';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'


class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHome = () =>  (<Home />)
  
  renderLogin = () => (<Login />)

  renderClients = () => (<Clientes />)

  renderCadastrar = () => (<Cadastrar />)

  renderRotes = () => {
    return ( 
      <Provider store={ store }>
    <Switch>
        <Route exact path="/" render={({ match }) => this.renderHome(match) }/>
        <Route exact path="/login" render={ ({ match }) => this.renderLogin(match) } />
        <Route exact path="/clients" render={ ({ match }) => this.renderClients(match) } />
        <Route exact path="/cadastrar" render={ ({ match }) => this.renderCadastrar(match) } />
        <Route component={ NotFound } />
    </Switch>
    </Provider>
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
