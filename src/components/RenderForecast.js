import React, {useEffect} from 'react'
import Get5days from './GetData5days'
import RenderLoading from './RenderLoading'
import M from 'materialize-css'


const RenderForecast = (prop) =>
{
  useEffect(() =>
  {
    M.AutoInit();
  })

    if(prop.Weather.length > 0 && prop.Weather !== undefined)
    {
    
    const list = Get5days(prop.Weather)
    

   
    return(
    
    <div className="container center-align">
      <div className="row">
        {list.map((d, key) =>(
        <div key={key} className="col s5 m3">
        <h5>{d.dt}</h5>
        
    
        <img alt="" src={d.icon}></img>
        <h5>{d.desc}</h5>
        <h5 key={d.dt}>Max: {d.max}C / Min: {d.min}C</h5>
        </div>

        ))}
    </div>
    </div>

    )
    }

else
    return(<RenderLoading/>)

}

export default RenderForecast