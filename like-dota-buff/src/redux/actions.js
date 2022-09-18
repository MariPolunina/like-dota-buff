import { heroAPI } from "../api/api"
import { ALL_HEROES_ADD, ALL_ITEMS_ADD } from "./types"

export const allHeroesAdd = (data) => {
    return { type: ALL_HEROES_ADD, data };
}
export const allItemsAdd = (data) => {
    return { type: ALL_ITEMS_ADD, data };
}

export const allHeroesLoad = () => {
    return async (dispatch, getState) => {
        if (getState().allHeroesReducer.heroes.length == 0) {
            const response = await heroAPI.getAllHeroes();
            dispatch(allHeroesAdd(response.data));
        }
    }
}
export const allItemsLoad = () => {
    return async (dispatch, getState) => {
        if (getState().allItemsReducer.items.length == 0) {
            const response = await heroAPI.getConstant('items');
            dispatch(allItemsAdd(response.data));
        }
    }
}

