import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import cadastrarAction from '../actions'

class Cadastrar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      idade: 0,
      email: '',
    }
  }

  handleChange = (e) => {
    const { target: { value, name } } = e;
    this.setState({
      [name]: value,
    })
  }
  render() {
    const { cadastrar } = this.props;
    return (
      <div>
        <h1>Cadastrar</h1>
        <form>
          <label htmlFor='nome'>
            Nome:
      <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange} />
          </label>

          <label htmlFor='idade'>
            Idade:
      <input name='idade' type="text" value={this.state.idade} onChange={this.handleChange} />
          </label>

          <label htmlFor='email'>
            Email:
      <input name='email' type="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          {/* <Link to='/clients'> */}
          <button type="button" onClick={() => {
            cadastrar(this.state);
          }} > Login</button>
          {/* </Link> */}
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  cadastrar: (item) => dispatch(cadastrarAction(item))
});

export default connect(null, mapDispatchToProps)(Cadastrar);
