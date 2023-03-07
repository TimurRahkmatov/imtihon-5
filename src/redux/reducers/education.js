export const profileEducation=(state= initilSocial,action) => {
    switch(action.type) {
        case EDUCATION_GET:
            return {
                profileeducation:action.payload
            }
        default:
            return state;
    }
}