export type AuthUser = {
    id_user:string;
    nom:string;
    prenom:string;
    login:string;
    telephone:string;
    role: 'admin' | 'client';
  };

  export type LoginData = {
    login: string;
    password: string;
  };
  
  export type UserResponse = {
    status:string;
    message?:string;
    user: AuthUser;
    token:string;
  };

   
    