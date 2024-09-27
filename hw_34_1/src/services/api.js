import axios from 'axios';

export const getHotels = async () => {
    const response = await axios.get(`http://localhost:4000/hotels`);
    return response.data;
};