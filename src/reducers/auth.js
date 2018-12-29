const initState ={
    currentUser:'',
    isLogin:false
}
const auth = (state =initState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                currentUser:action.user,
                isLogin:true
            };
        case 'LOG_OUT':
            return initState
        default:
            return state
    }
}
export default auth