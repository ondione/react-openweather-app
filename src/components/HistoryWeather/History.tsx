import React, { FC , useState , useEffect }  from 'react';
import { WeatherType } from '../../types/weatherType';
<<<<<<< Updated upstream
import { selectHistory , selectHistoryByTown } from '../../redux/reducers/historySlice'
=======
import { selectHistory , selectHistoryByTown , histdata } from '../../redux/reducers/historySlice'
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

    const unitMesure = shareService.getUnitMesures();

    const getFiltereddata = ()=>{
        if(currentFilter!==''){
           
        }
    };
=======
    const filteredData:histdata = useAppSelector(state => selectHistoryByTown(state, currentFilter));
    const unitMesure = shareService.getUnitMesures();


>>>>>>> Stashed changes
    const goback = () => {
        navigate('/home');
    };
    useEffect(()=>{
<<<<<<< Updated upstream

    },[])
=======
        setWeatherData(filteredData?.data);
    },[filteredData])
>>>>>>> Stashed changes


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
<<<<<<< Updated upstream
                            <button onClick={(e)=>setCurrentFilter(item?.ville)}>{item?.ville}</button> 
=======
                                <button key={index++} onClick={(e)=>setCurrentFilter(item?.ville)}>{item?.ville}</button> 
>>>>>>> Stashed changes
                            </>
                        );
                    })
                }
            </div>
<<<<<<< Updated upstream
            <ResultDisplay weatherData={weatherData} weatherUnit={weatherUnit}  unitMesure={unitMesure} />
        
=======
            <ResultDisplay weatherData={weatherData} weatherUnit={weatherUnit} unitMesure={unitMesure} /> 
>>>>>>> Stashed changes
        </>
    );
}
export default WeatherHistoryComponent;