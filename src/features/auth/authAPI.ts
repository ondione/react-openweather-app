import AxioInstanceClass   from '../../configs/api';
import { LoginData , UserResponse} from './authType'
const instance = new AxioInstanceClass();

export function Authenticate(loginData:LoginData){
    if( process.env.REACT_APP_IS_AUTH_LOCAL === "true"){

      return  fetch('mockApiAuth.json').then((res:any)=>{
        return res.json();
      }).then(json =>{
        return json;
      }).catch(err =>{
        err.message = 'login/ pass invalid';
        return Promise.reject(err);
      })
    }
    
    return instance.post('/login_wservice', loginData).then((response:UserResponse) => {
        return response;
    });
}



