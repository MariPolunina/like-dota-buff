import { ALL_HEROES_ADD } from "./types";

const initialState = {
    heroes: []
};

export const allHeroesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_HEROES_ADD:
            return {
                ...state,
                heroes: action.data
            }
        default:
            return state;
    }
}