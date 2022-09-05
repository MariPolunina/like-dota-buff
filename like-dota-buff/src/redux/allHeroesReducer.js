import { primaryAttrImages } from "../assets/images";
import { ALL_HEROES_ADD } from "./types";

const initialState = {
    heroes: [],
    primaryAttrImages: primaryAttrImages,
};

export const allHeroesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_HEROES_ADD:
            const newHeroes = action.data.sort(function (a, b) {
                if (a.localized_name > b.localized_name) {
                    return 1;
                }
                if (a.localized_name < b.localized_name) {
                    return -1;
                }
                return 0;
            });
            return {
                ...state,
                heroes: newHeroes
            }
        default:
            return state;
    }
}