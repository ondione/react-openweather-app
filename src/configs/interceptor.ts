import AxioInstanceClass from "./api";
import { selectAuth} from '../features/auth/authSlice';
import { RootState } from '../app/store'
const axiosInstance = new AxioInstanceClass().getAxioInstance();

const setup = (store:any) => {
    const token = selectAuth(store.getState()).token;
    // get token from store

    axiosInstance.interceptors.request.use( (config:any) => {
        config.headers.Authorization = token ? `Bearer ${token}`: '';
        return config;
    },(error:Error) => {
        // handle error 
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use( (response:any) => {
        console.log(response ,' response')
        return  response.data;
    }, async (err:any) => {
        // handle error  il want to implement retry it th place
        const originalConfig = err.config;
        return Promise.reject(err);
    });
};
export default setup;