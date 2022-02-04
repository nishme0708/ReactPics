import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID yhrXTrtk4ZbRT1CdWSd-Ht3xSuQhB-tKzIVrPZPIT_s'
    }
});