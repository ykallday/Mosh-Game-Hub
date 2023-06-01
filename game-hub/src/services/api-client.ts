import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '39c7e72b479e405899b120e1b3371bb2'
    }
})

