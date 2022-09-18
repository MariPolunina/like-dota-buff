import axios from "axios"

export const heroAPI={
    getAllHeroes(){
        return axios.get('https://api.opendota.com/api/heroStats')
    },
    getConstant(resource){
        return axios.get(`https://api.opendota.com/api/constants/${resource}`)
    },
}