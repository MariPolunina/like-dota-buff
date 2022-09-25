import { ALL_PRO_PLAYERS } from "./types";

const initialState = {
    proPlayers: [],
    loadNumber: 100
};

export const allProPlayersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_PRO_PLAYERS:
            return {
                ...state,
                proPlayers: action.data
            }
        default:
            return state;
    }
}