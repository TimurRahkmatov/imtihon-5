import { combineReducers } from "redux";
import { profileReducer } from "./profile";
import { profileSocial } from "./social";
import { profileEducation } from './education';
import { profileExprience } from "./exprience";

export const reducer = combineReducers({
    profile:profileReducer
})

export const reduc = combineReducers({
    social:profileSocial
})

export const reduce = combineReducers({
    education:profileEducation
})

export const reducers = combineReducers({
    exprience:profileExprience
})