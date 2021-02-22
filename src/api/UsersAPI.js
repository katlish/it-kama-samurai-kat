import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_SAMURAIJS_API_URL,
  headers:     {
      "API-KEY": process.env.REACT_APP_API_KEY
  }
});

export const UsersAPI = {
    getUsers(){
        return instance.get("users")
                      .then(response => response.data.items);
    }
}