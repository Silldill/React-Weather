
import React, {useEffect, useState} from 'react'
import RenderForecast from './RenderForecast'
import GetWeather from './GetData'

export default function FiveDays(prop)
{
    const [Value, setValue] = useState([])
    
    useEffect(() =>
    {

        GetWeather(prop.search, true).then(function(data)
        {
            if(data.cod === '404')
            {
                return;
            }
            setValue(Value => ([...data.list]));
            
        })
    },[prop.search])

    


    return(
    
    <RenderForecast Weather={Value}/>

    )
}