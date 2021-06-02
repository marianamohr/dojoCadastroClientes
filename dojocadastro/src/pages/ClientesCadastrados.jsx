import React from 'react';
import { connect } from 'react-redux';

 class ClientesCadastrados extends React.Component {
  render() {
    const { listUsers } = this.props;
    return (
      <>
        <h1>Clientes Cadastrados</h1>
        {listUsers.length === 0 ? (<h2>
          Nenhum Usuário Cadastrado
        </h2>) : listUsers.map((user, index) => {
          return (
          <li key={index}>
            {user.nome}
            {" - "}
            {user.email}
            {" - "}
            {user.idade}
          </li>
          )
        })}
      </>
    );
  }
}
const mapStateToProps = state => ({
  listUsers: state.user.listUsers,
})
export default connect(mapStateToProps)(ClientesCadastrados) ;