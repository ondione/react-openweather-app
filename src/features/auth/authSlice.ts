import { createSlice } from "@reduxjs/toolkit";

export const authSate = {
    auth:{
        login:"",
        password:"",
        isLogged:false,
        sessiondata:[],
        token:'',
        refreshToken:''
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

export const selectAuth = (state:any) => state.auth.auth;
export const { LoginActionRequest, LoginActionSuccess, LogoutActionRequest} = authSlice.actions;
export default authSlice.reducer;