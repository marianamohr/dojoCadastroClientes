const INITIAL_STATE = {
    listUsers: [],
}

function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CADASTRAR':
            return {
                ...state,
                listUsers: [
                    ...state.listUsers,
                    action.payload.item,
                ],
            };
        case 'EXCLUIR':
            return  { listUsers:  state.listUsers.filter(user => user !== action.item) }
        default:
            return state;
    }
}

export default userReducer;