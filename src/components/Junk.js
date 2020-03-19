async function FetchData(City)
    {
        var key = "3c1976c73e4965f0703087036caadaf4"
        var url = "http://api.openweathermap.org/data/2.5/forecast?q="+City+"&units=metric&lang=se&appid="+key
        console.log('UPDATE')

        try {
            const response = await fetch(url);
            const json = await response.json();
            if(json.cod === '404')
            {
                return;
            }
            if(json == Value)
            {
            FetchData(City)
            }
            var j = Value;
            // j.Weather = Get5days(json.list);
            j.Weather = json.list;
            setValue(Value => ([...json.list]));
            console.log(Value)
            
          }
          catch (e) {
            console.log('ERROR: ', e);
          }

    }