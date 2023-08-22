import React, { useState , useCallback, FC }  from 'react';
import { useNavigate }  from 'react-router-dom';
import { Authenticate } from  './authAPI';
import { UserResponse} from './authType';
import { LoginActionRequest , LoginActionSuccess } from './authSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';


interface messageError {
  name?: string,
  message?:string
};

const  AuthForm:FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessages, setErrorMessages] = useState<messageError>({});
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  const defaultErrorsMessage = {
    name: "invalid username",
    pass: "invalid password",
    loginOrPass:"Login or mot de pass incorrect"
  };

  //const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const onChangeUsername = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setUsername(event.target.value);
  };

  const onChangePassword = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(event.target.value);
  };
      
  const handleLogin = ((event:React.FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      username:string,
      password:string
    };
    dispatch(LoginActionRequest({login: username, password:password }));
    Authenticate({login:username, password}).then((res:UserResponse) =>{
      if( res && res.status === "success" && res.message === "OK"){
        dispatch( LoginActionSuccess({ 
          isLogged: true,
          login:username,
          sessiondata: JSON.stringify(res),
          token:res.token,
        }));
        setMessage("User successfully connected ");
        navigate("/home");
      }else{
        setErrorMessages({ 
          name: "Login ou Mot de passe", 
          message: defaultErrorsMessage.loginOrPass 
        });
      }
    });
  });  

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-4 d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex justify-content-center py-4"> </div>
          <div className="card mb-3">
            <div className="card-body">
              <div className="pt-4 pb-2">
                <h5 className="card-title text-center pb-0 fs-4">Connexion</h5>
                <p className="text-center small">Entre ton login et mot de passe</p>
              </div>
              <form className="row g-3 needs-validation" onSubmit={handleLogin}  noValidate>
                <div className="col-12">
                  <label htmlFor="username" className="form-label">Login:</label>
                    <div className="input-group has-validation">
                      <input type="text" id="username" name="username"  className="form-control"   
                      placeholder="Enter username"       
                      value={username} 
                      onChange={onChangeUsername}  /> 
                  </div>
                </div>
                <div className="col-12">
                    <label htmlFor="password" className="form-label">Mot de passe:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={onChangePassword} 
                    />
                </div>

                <div className="col-12">
                  <button  type="submit" className="btn btn-primary w-100">Connexion</button>
                </div>
              </form>
          
              { message && (<div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div> )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AuthForm;

