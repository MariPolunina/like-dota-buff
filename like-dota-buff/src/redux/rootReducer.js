import { combineReducers } from "redux";
import { allHeroesReducer } from "./allHeroesReducer";
import { headerReducer } from "./headerReducer";

export const rootReducer=combineReducers({
    allHeroesReducer,
    headerReducer
});