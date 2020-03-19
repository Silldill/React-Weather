import React, {useEffect, useState} from 'react'
import GetDate from './GetDate'
import GetWeather from './GetData'
import Search from './Search'
import M from 'materialize-css'
import '../css/Style.css'
import FiveDays from './5dayForecast'
import Favorites from './Favorites'
import RenderLoading from './RenderLoading'
const  Weather = () =>
{

    const [Value, SetValue] = useState({name: '', maxTemp: 0, minTemp: 0, dt: '', icon: '', desc: ''})
    const [SearchQuery, SetSearch] = useState('stockholm')
    const [Cookie, SetCookie] = useState();
    const [Render, setRender] = useState({loading: false});
    
 
   
    useEffect(() =>
    {
        
        

        GetWeather(SearchQuery, false).then(function(data)
        {
          
            
            if(data.cod === '404')
            {
                M.toast({html: 'Kunde ej hitta!'})
                return;
            }
            setRender({loading: false})
            setTimeout(() => {
                setRender({loading: true}); 
             }, 1000);
            
            
            
            const temp = data.main;
            let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"     

            SetValue({name: data.name, maxTemp:temp.temp_max, minTemp: temp.temp_min, dt: GetDate(data.dt), icon: icon, desc:data.weather[0].description})
        })
    },[SearchQuery])

    
    const SearchCity = (city) =>
    {
        SetSearch(city)
    }

    const AddFavorite = () =>
    {
        console.log(Value.name)

    }

    const RemoveFavorite = (e) =>
    {
        console.log(e)

    }
    if(Render.loading !== true)
    {
        return(<div>
            <Search Search={SearchCity}/>
        <RenderLoading/>
        </div>) 
    }
    else
    {

    return(
        <div>
        <Search Search={SearchCity}/>
        <Favorites Search={SearchCity} Remove={RemoveFavorite}/>
        <div className="container">
        
        <div id="Main" className="section">
        
        <div className="row center-align">
        <h2>{Value.name}</h2>
        <img alt='' src={Value.icon}></img>
        <h4>{Value.desc}</h4>
        <h4>Max: {Value.maxTemp}C / Min: {Value.minTemp}C</h4>
        <p>Senast updaterat: {Value.dt}</p>
        <p>Lägg till i Favoriter</p>
        <i onClick={AddFavorite} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></i>
        </div>
        
        </div>
        <div className="divider"></div>
        </div>
        <FiveDays search={SearchQuery}/>
        </div>
        
    )
    }
}
export default Weather