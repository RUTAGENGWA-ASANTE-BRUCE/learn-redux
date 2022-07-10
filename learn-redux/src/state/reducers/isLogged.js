const loggedReducer=(state={},action)=>{
    switch(action.type) {
        case 'LOGIN':
            state={loggedIn:true,userName:action.payload}
            return state;

        case 'LOGOUT':
            state={loggedIn:false};
            return state;
        default:
            return state;
    }

}
export default loggedReducer;