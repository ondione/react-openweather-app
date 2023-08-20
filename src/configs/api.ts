import axios from "axios";

class AxioInstanceClass{
    private static _instance:AxioInstanceClass;
    private axioInstance:any;
    constructor() {
      this.axioInstance = axios.create({
        baseURL: "",
        headers: {
          "Content-Type": "application/json",
        }
      });
  
      if(AxioInstanceClass._instance) {
        console.log("already created!");
        return AxioInstanceClass._instance;
      }
  
      AxioInstanceClass._instance = this;
      console.log("singleton created");
    }
    public static getInstance():AxioInstanceClass{
      return AxioInstanceClass._instance;
    }
    getAxioInstance(){
      return this.axioInstance;
    }
  
    fetch(url:string) {
      return this.axioInstance.get(url);
    }
  
    post(url:string, payload:any) {
      return this.axioInstance.post(url, payload);
    }
  
    put(url:string, payload:any) {
      return this.axioInstance.put(url, payload);
    }
  
    patch(url:string, payload:any) {
      return this.axioInstance.patch(url, payload);
    }
  
    delete(url:string, payload:any) {
      return this.axioInstance.delete(url, payload);
    }
  }
export default AxioInstanceClass;