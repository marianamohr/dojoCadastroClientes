import React from 'react';
import { connect } from 'react-redux';
import excluirAction from '../actions/actionDelete';

 class ClientesCadastrados extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       users: [],
     }
   }

  handleClick = () => {
    const { listUsers } = this.props;
    this.setState({
      users: listUsers.sort((a, b) => {
        if (a.nome < b.nome) return -1;
        if (a.nome > b.nome) return 1;
        return 0;
      })
    })
  }
  render() {
    const { listUsers, excluir } = this.props;
    return (
      <div>
        <h1>Clientes Cadastrados</h1>
        <button onClick={this.handleClick}>Ordem Alfabetica</button>
        {listUsers === undefined ? (<h2>
          Nenhum Usuário Cadastrado
        </h2>) : listUsers.map((user) => {
          return (
            <>
            <li key={user.nome}>
              {user.nome}
              {" - "}
              {user.email}
              {" - "}
              {user.idade}
            </li>
            <button onClick={() => excluir(user)}>X</button>
          </>
          )
        })}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  excluir: (e) => dispatch(excluirAction(e))
});

const mapStateToProps = state => ({
  listUsers: state.user.listUsers,
})
export default connect(mapStateToProps, mapDispatchToProps)(ClientesCadastrados) ;