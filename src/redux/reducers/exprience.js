export const profileExprience=(state=initilSocial,action) => {
    switch(action.type) {
        case EXPRIENCE_GET:
            return {
                profilexprience:action.payload
            }
        default:
            return state;
    }
}