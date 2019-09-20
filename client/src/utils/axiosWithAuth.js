import axios from 'axios';

//Axios request to retrieve token from server so I can use token to interact with API.
export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`
        }
    });
};