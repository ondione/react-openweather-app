import React , { FC } from 'react';

interface SearchProps {
    setSearchWeather:Function;
    handleSearch: Function,
    searchvalue: string;
    error:string
};

const SearchWeatherchComponent:FC<SearchProps> = (props) => {
    const { setSearchWeather, handleSearch , searchvalue , error} = props;
    return (
        <>
            <div className='searchWrapper'>
              
                <input type="text" 
                    className="searchInput" 
                    value={searchvalue}
                    name="searchIput"
                    aria-describedby='title-error' 
                    aria-invalid ={!!error}
                    required 
                    placeholder='Saisir la ville Ex: Paris ou Lyon'
                    onChange={ (e:React.ChangeEvent<HTMLInputElement>) =>{ setSearchWeather(e.target.value)} } 
                />
                <button className="searchButton" type="submit" onClick={(e:React.FormEvent) => handleSearch(e)}>
                    Rechercher la metéo
                </button>
            </div>
            <div className='row ml-0'>
                {
                 error && <small id="title-error" role="alert">{error}</small>
                }
            </div>
        </>
    );
}
export default SearchWeatherchComponent;