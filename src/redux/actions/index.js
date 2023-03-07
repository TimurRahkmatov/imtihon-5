import { PROFILE_GET } from "../types"
import { EDUCATION_GET } from "../types/education";
import { EXPRIENCE_GET } from "../types/exprience";
import { SOCIAL_GET } from "../types/social"
// import { profileEducation } from './../reducers/education';

export const profileGet=(data)=>{
    return{
        type:PROFILE_GET,
        payload:data
    }
}

export const profilesocial=(data)=> {
    return {
        type:SOCIAL_GET,
        payload:data
    }
}

export const profileEducation=(data)=> {
    return {
        type:EDUCATION_GET,
        payload:data
    }
}
export const profileExpreince=(data)=> {
    return {
        type:EXPRIENCE_GET,
        payload:data
    }
}