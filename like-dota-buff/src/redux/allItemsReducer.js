import { ALL_ITEMS_ADD } from "./types";

const initialState = {
    items: [],
};

export const allItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_ITEMS_ADD:
            return {
                ...state,
                items: action.data
            }
        default:
            return state;
    }
}