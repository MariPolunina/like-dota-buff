import { heroAPI } from "../api/api"
import { ALL_HEROES_ADD } from "./types"

export const allHeroesAdd = (data) => {
    return { type: ALL_HEROES_ADD, data }
}

export const allHeroesLoad = () => {
    return async dispatch => {
        // const response = await heroAPI.getAllHeroes();
        // dispatch(allHeroesAdd(response.data));
    }
}