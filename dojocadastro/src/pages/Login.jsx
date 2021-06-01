import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  render() {
    return (
      <form>
        <h1>Login</h1>
        <label htmlFor='email'>
          Email:
      <input id='email' type="email" />
        </label>
        <label htmlFor='password'>
          Senha:
      <input id='password' type="password" />
        </label>
        <Link to='/clients'> 
        <button type="button"> Login</button>
        </Link>
      </form>
    );
  }
}
