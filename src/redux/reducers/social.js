export const profileSocial=(state= initilSocial,action) => {
    switch(action.type) {
        case SOCIAL_GET:
            return {
                profilesocial:action.payload
            }
        default:
            return state;
    }
}