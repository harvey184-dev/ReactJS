import axios from 'axios';

const accessKey = 'YVcNj7FEqOWSYOJdTlZteQuZ-hoE1RlRl2GJiVhf3sU';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${accessKey}`
    }
});
