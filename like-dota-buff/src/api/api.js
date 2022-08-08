import axios from "axios"

export const heroAPI={
    getAllHeroes(){
        return axios.get('https://api.opendota.com/api/heroes')
    }
}