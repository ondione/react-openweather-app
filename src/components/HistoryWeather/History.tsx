import React, { FC , useState , useEffect }  from 'react';
import { WeatherType } from '../../types/weatherType';
import { selectHistory , selectHistoryByTown , histdata } from '../../redux/reducers/historySlice'
import { useAppSelector } from '../../app/hooks';
import ResultDisplay  from '../resultDisplay';
import shareService from '../../services/shareService';
import { useNavigate }  from 'react-router-dom';


const WeatherHistoryComponent:FC = () => {
    const [ weatherData , setWeatherData ] = useState<WeatherType>();
    const [ weatherUnit , setWeatherUnit ] = useState<string>('standard');
    const [ currentFilter , setCurrentFilter] = useState<string>('');
    const filters = useAppSelector(selectHistory);
    const navigate = useNavigate();
    const filteredData:histdata = useAppSelector(state => selectHistoryByTown(state, currentFilter));
    const unitMesure = shareService.getUnitMesures();


    const goback = () => {
        navigate('/home');
    };
    useEffect(()=>{
        setWeatherData(filteredData?.data);
    },[filteredData])


    return (
        <>
            
            <div className='history-title'>
                <a onClick={goback} className='back'> Retour </a>
                Historiques météo ville
            </div>
            <div className='filterItem'>
                { 
                    filters.length > 0 && filters.map((item:any, index)=>{
                        return ( 
                            <>
                                <button key={index++} onClick={(e)=>setCurrentFilter(item?.ville)}>{item?.ville}</button> 
                            </>
                        );
                    })
                }
            </div>
            <ResultDisplay weatherData={weatherData} weatherUnit={weatherUnit} unitMesure={unitMesure} /> 
        </>
    );
}
export default WeatherHistoryComponent;