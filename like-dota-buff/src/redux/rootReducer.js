import { combineReducers } from "redux";
import { allHeroesReducer } from "./allHeroesReducer";
import { headerReducer } from "./headerReducer";
import { heroesWinRateReducer } from "./heroesWinRateReducer";
import { mostPlayedReducer } from "./mostPlayedReducer";
import { metaReducer } from "./metaReducer";

export const rootReducer = combineReducers({
    allHeroesReducer,
    headerReducer,
    heroesWinRateReducer,
    mostPlayedReducer,
    metaReducer
});