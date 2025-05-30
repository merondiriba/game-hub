import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'a09d1dfdd8a64a55b7bf93b758537a7a'
    }
})