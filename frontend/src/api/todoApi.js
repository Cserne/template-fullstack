import axios from 'axios';

export const todoApi = () => {
    const instance = axios.create({
        // baseURL: "http://localhost:4000/api",
        baseURL: "http://localhost:8080/api",
        timeout: 3000,
      });

    const post = async(path, data) => {
        try {
            const response = await instance.post (path, data, { headers: {
                authorization: localStorage.getItem('token'),
            }
            })
;
            console.log("BODY:", response.body);
            console.log(response)
            return response;
        } catch (error) {
            console.log(error.response.status);
            console.log(error.response.data);
            return error.response;
        }
    }

    const get = async(path) => {
        try {
            const response = await instance.get(path, {
                headers: {
                    authorization: localStorage.getItem('token'),
                }
            });
            return response;
        } catch (error) {
            console.log(error.response.status);
            console.log(error.response.data);
            return error.response;
        }
    }
    return { post, get }
    // return { post, get, _instance: instance }
};
