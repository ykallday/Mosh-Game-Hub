import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '7177d4d518df4c88a8ce4a683f2f3ada'
    }
})

