import AxioInstanceClass   from '../configs/api';
const instance = new AxioInstanceClass();

class ShareService {

    loadTown(){
        instance.fetch('').then((response:any) =>{
            return response;
        })
    }
    searchWeather(searchvalue:string, weatherUnit:string){
        const api_weather_path = process.env.REACT_APP_API_OPENWEATHER;
        const api_weather_key = process.env.REACT_APP_OPENWEATHER_KEY;
        let url =`${api_weather_path}?q=${searchvalue}&appid=${api_weather_key}`;
        
        if(weatherUnit && weatherUnit !=='standad'){
            url +=`&units=${weatherUnit}`
        }
        return fetch(url).then((res:any)=>{
           return res;
        }).catch((error)=>{
            throw(new Error(error));
        });
    }

    getUnitMesures =()=>{
        return {
            standard:{temperature:'K', pressure:'hPa' , humidity:'%' , visibility:'m', speed:'m/s', guest:'m/s', all:'%' , rain:'mm' , snow:'m'},
            metric:{temperature:'C', pressure:'hPa' , humidity:'%' , visibility:'m', speed:'m/s', guest:'m/s', all:'%' , rain:'mm' , snow:'m'},
            imperial:{temperature:'F', pressure:'hPa' , humidity:'%' , visibility:'m', speed:'mile/hour', guest:'mile/hour', all:'%' , rain:'mm' , snow:'m'}
        };
    }
}
const shareService = new ShareService();
export default shareService;


