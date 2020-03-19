async function GetData(City, Forecast){
  var key = "3c1976c73e4965f0703087036caadaf4"
  if(Forecast === true)
  {
    var url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q="+City+"&units=metric&lang=se&appid="+key
  }
  else
  {
    var url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q="+City+"&units=metric&lang=se&appid="+key

  }

  
    
    var json2;

    try {
        const response = await fetch(url);
        const json = await response.json();
        json2 = json;
      }
      catch (e) {
        console.log('ERROR: ', e);
      }

      return json2;

}

export default GetData