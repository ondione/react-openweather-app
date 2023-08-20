import React , { FC, ReactElement , useState} from 'react';
import { WeatherType } from '../types/weatherType';
import Tabs from './tabs/Tabs';

type Props = {
    weatherData:any,
    weatherUnit:string,
    unitMesure:any
}

const ResultDisplay:FC<Props> = ({weatherData , weatherUnit , unitMesure}) => {
   
    return (
        <>
          <section id="presentation" className="display">
                    <div className='row presentation '>
                        <div className='card'>
                            <div className='row name'> 
                                <span><b>Météo </b> {weatherData?.name}</span>
                                <span><b>Date </b> 
                                { 
                                    weatherData?.dt && new Intl.DateTimeFormat('fr-FR',{
                                        year:'numeric',
                                        month:'2-digit',
                                        day:'2-digit',
                                    }).format(weatherData?.dt)
                                }
                                </span>
                                <span><b>Coords Geo </b>Lon: {weatherData?.coord.lon} Lat :{weatherData?.coord.lat} </span>
                            </div>
                            <div className='row'>
                                <div className='col-sm-5 displayResume'>
                                    <h6><b>Température ressentie</b></h6>
                                    <span className='midlle'>
                                        <img 
                                            src={`${process.env.REACT_APP_OPENWEATHER_ICON}${weatherData?.weather[0]?.icon}${'@2x.png'}`} 
                                            className='weathericon'
                                        />
                                    </span>
                                    <span className='midlle'>{weatherData?.main?.temp} {unitMesure[weatherUnit].temperature}</span>
                                    <span className='full'>{weatherData?.weather[0]?.main}</span>
                                    <span className='full'>{weatherData?.weather[0]?.description}</span>
                                </div>
                                
                                <div className='col-sm-5'>
                                <p><b>Feels like: </b>{weatherData?.main?.feels_like} {unitMesure[weatherUnit].temperature}</p>
                                <p><b>Temp min: </b>{weatherData?.main?.temp_min} {unitMesure[weatherUnit].temperature}</p>
                                <p><b>Temp max: </b>{weatherData?.main?.temp_max} {unitMesure[weatherUnit].temperature}</p>
                                <p><b>Pressure:  </b>{weatherData?.main?.pressure} {unitMesure[weatherUnit].pressure}</p>
                                <p><b>Humidity:  </b>{weatherData?.main?.humidity} {unitMesure[weatherUnit].humidity}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className='row presentationOnglet' >
                        <Tabs>
                            <span title="Visibilité">
                            <p><b>Visibility: </b> {weatherData?.visibility} {unitMesure[weatherUnit].visibility}</p>
                            </span>
                            <span title="Vents">
                                <p><b>Speed:  </b>{weatherData?.wind?.speed} {unitMesure[weatherUnit].speed}</p>
                                <p><b>Degres: </b>{weatherData?.wind?.deg} {"deg"}`</p>
                                <p><b>Gust:  </b>{weatherData?.wind?.gust} {unitMesure[weatherUnit].guest}</p>
                            </span>
                            <span title="Nuanges">
                            <p> All: {weatherData?.clouds?.all} {unitMesure[weatherUnit].all}</p>
                            </span>
                            <span title="Soleil">
                                
                                <p><b>Lever du soleil: </b>
                                { 
                                  weatherData?.sys?.sunrise && new Intl.DateTimeFormat('fr-FR',{
                                    hour:'2-digit',
                                    minute:'2-digit',
                                    second:'2-digit',
                                }).format(weatherData?.sys?.sunrise)
                                }</p>
                                <p><b>Coucher du soleil:  </b>
                                {
                                   weatherData?.sys?.sunset && new Intl.DateTimeFormat('fr-FR',{
                                    hour:'2-digit',
                                    minute:'2-digit',
                                    second:'2-digit',
                                }).format( weatherData?.sys?.sunset)
                                }
                                </p>
                            </span>
                        </Tabs>
                    </div>
          </section>
        </>
    );
}
export default ResultDisplay;