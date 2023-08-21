import React, { FC , useState , useEffect, FormEvent }  from 'react';
import { Link }  from 'react-router-dom';
import SearchWeatherchComponent from '../searchWeather/SearchWeather';
import { WeatherType } from '../../types/weatherType';
import shareService from '../../services/shareService';
import { addHistory } from '../../redux/reducers/historySlice'
<<<<<<< Updated upstream
import {  useAppDispatch } from '../../app/hooks';
=======
import { useAppDispatch } from '../../app/hooks';
>>>>>>> Stashed changes
import ResultDisplay  from '../resultDisplay';

const ResultWeatherComponent:FC = () => {
    const [ searchWeather, setSearchWeather ] = useState("");
    const [ weatherData , setWeatherData ] = useState<WeatherType>();
    const [ weatherUnit , setWeatherUnit ] = useState<string>('standard');
<<<<<<< Updated upstream
    const [ error , setError] = useState('');
=======
    const [ error, setError] = useState('');
>>>>>>> Stashed changes
    const dispatch = useAppDispatch();
    const unitMesure = shareService.getUnitMesures();

    const handleSearch = (e:FormEvent)=>{
        e.preventDefault();
        if(!searchWeather){
           setError('La ville est obligatore');
        }
        if(searchWeather!== ""){
            //call service for search weather
<<<<<<< Updated upstream
=======
            //getData();
>>>>>>> Stashed changes
            return shareService.searchWeather(searchWeather , weatherUnit).then((resp:any | null) =>{
               return resp.json();
            }).then(json =>{
                dispatch(addHistory({ville:`${searchWeather}`, data:json}))
<<<<<<< Updated upstream
=======
                setSearchWeather("");
>>>>>>> Stashed changes
                setWeatherData(json);
            });
        }
    };
    const getData = () => {
        return fetch('result.json').then((res:any)=>{
            return res.json();
        }).then(json =>{
           dispatch(addHistory({ville:`${searchWeather}`, data:json}))
<<<<<<< Updated upstream
          setWeatherData(json);
        })
    }
    useEffect(() => { 
        //getData();
=======
           setWeatherData(json);
           setSearchWeather("");
        })
    }
    useEffect(() => { 
       //getData();
>>>>>>> Stashed changes
    },[]);

    return (
        <>
<<<<<<< Updated upstream
            
=======
>>>>>>> Stashed changes
            <section id="home" className="search">
                <div>
                    <div className="col-sm-6">
                        <select className="unitSelect" defaultValue={"standard"} 
                        onChange={(e)=>setWeatherUnit(e.target.value)} 
                        aria-label="Selectionne une option">
                            <option key={200} defaultValue={''} >Selectionner unité de mesure</option>
                            { 
                            ['standard','metric','imperial'].map(( item:any, key:number) => (
                                <option key={key} value={item} >{item} </option>
                            ))
                            };
                        </select>
                    </div>

                </div>
                <div className='presentation row'>
                    <SearchWeatherchComponent 
                        setSearchWeather={setSearchWeather} 
                        handleSearch={handleSearch} 
                        searchvalue={searchWeather}
                        error={error}
                    />
                </div>
            </section>
            <section id="presentation" className="alert">
                <div> Display weather alert </div>
                <div className='historyLink'>
                    <Link to={`history`}  className="nav-link">
                        <span className="text">Voir Historique</span> 
                        <span className="card-icon rounded-circle d-flex align-items-center btn-circle-sm justify-content-center">      
                        </span>  
                    </Link>  
                </div>  
            </section>
            <ResultDisplay weatherData={weatherData} weatherUnit={weatherUnit} unitMesure={unitMesure} />
        </>
    );
}
export default ResultWeatherComponent;