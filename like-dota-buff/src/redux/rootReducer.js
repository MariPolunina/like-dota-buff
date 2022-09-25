import { combineReducers } from "redux";
import { allHeroesReducer } from "./allHeroesReducer";
import { headerReducer } from "./headerReducer";
import { heroesWinRateReducer } from "./heroesWinRateReducer";
import { mostPlayedReducer } from "./mostPlayedReducer";
import { metaReducer } from "./metaReducer";
import { allItemsReducer } from "./allItemsReducer";
import { allProPlayersReducer } from "./allProPlayersReducer";

export const rootReducer = combineReducers({
    allHeroesReducer,
    headerReducer,
    heroesWinRateReducer,
    mostPlayedReducer,
    metaReducer,
    allItemsReducer,
    allProPlayersReducer
});