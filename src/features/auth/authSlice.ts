import { createSlice } from "@reduxjs/toolkit";
<<<<<<< Updated upstream
=======
import { RootState } from '../../app/store';

export interface authI {
    login: string;
    password:string;
    isLogged:string;
    sessiondata:string[],
    token:string;
};
>>>>>>> Stashed changes

export const authSate = {
    auth:{
        login:"",
        password:"",
        isLogged:false,
        sessiondata:[],
<<<<<<< Updated upstream
        token:'',
        refreshToken:''
=======
        token:''
>>>>>>> Stashed changes
    }
};

export const authSlice = createSlice({
    name:'auth',
    initialState: authSate,
    reducers:{
        LoginActionRequest: (state, action) =>{
            action.payload.password.replace(/[a-zA-Z0-9]/g,"*");
            return { ...state, auth:action.payload };
        },
        LoginActionSuccess: (state, action) =>{
            return { ...state, auth:action.payload };
        },
        LogoutActionRequest: (state) =>{
            return { 
                ...state, 
                auth:{
                    login:"",
                    password:"",
                    isLogged:false,
                    sessiondata:[],
                    token:'',
                    refreshToken:''
                }
            }
        }
    }
});
<<<<<<< Updated upstream

export const selectAuth = (state:any) => state.auth.auth;
=======
export const selectAuth=(state:RootState)=>state.auth.auth;
>>>>>>> Stashed changes
export const { LoginActionRequest, LoginActionSuccess, LogoutActionRequest} = authSlice.actions;
export default authSlice.reducer;