import { PROFILE_GET } from "../types"
import { EDUCATION_GET } from "../types/education";
import { SOCIAL_GET } from "../types/social"
import { profileSocial } from './social';
import { profileEducation } from './education';

const initialState={
    profile:null
}

export const profileReducer=(state=initialState,action)=>{
    switch(action.type){
        case PROFILE_GET:
            return{
                profile:action.payload
            }
        default:
            return state
    }switch(action.type) {
        case  SOCIAL_GET:
            return {
                profilesocial:action.payload
            }   
        default:
            return state
    }switch(action.type) {
        case EDUCATION_GET:
            return {
                profileeducation:action.payload
            }
        default:
            return state
    }

    
}

