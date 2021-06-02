import React from 'react';
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/cadastrar">Cadastrar</Link>
        <Link to="/clients">Clients</Link>
      </div>
    );
  }
}

