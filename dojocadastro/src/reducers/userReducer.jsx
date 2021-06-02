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
            console.log(state);
            return   state.listUsers.filter(user => user !== action.item) 
        default:
            return state;
    }
}

export default userReducer;