
import GetDate from './GetDate'
import DayOfWeek from './DayOfWeek'

export default  function Get5days(list)
{
    console.log(list)

    let day1 = [];
    let day2 = [];
    let day3 = [];
    let day4 = [];

    function MaxMin(arr)
    {
        var max = Math.max.apply(Math,arr.map(function(ques){return ques.main.temp;}))
        var min = Math.min.apply(Math,arr.map(function(ques){return ques.main.temp;}))
        let icon = "http://openweathermap.org/img/wn/" + arr[0].weather[0].icon + "@2x.png"  
        return {min: min, max: max, icon: icon, dt: DayOfWeek(arr[0].dt), desc:arr[0].weather[0].description}
    }
    

    list.forEach(element => {
        if(GetDate(element.dt).split(" ")[0] !== GetDate(parseInt(Date.now()) / 1000).split(" ")[0])
        {
            let date = GetDate(element.dt).split(" ")[0]
            
            switch (date) {
                case GetDate(parseInt(Date.now()) / 1000 + 86400).split(" ")[0]:
                    day1.push(element)
                    break;

                    case GetDate(parseInt(Date.now()) / 1000 + (86400 * 2)).split(" ")[0]:
                    day2.push(element)
                    break;

                    case GetDate(parseInt(Date.now()) / 1000 + (86400 * 3)).split(" ")[0]:
                    day3.push(element)
                    break;
            
                default:
                    day4.push(element)
                    break;
            }

        }
     });

     let arr = [];

     arr.push(MaxMin(day1))
     arr.push(MaxMin(day2))
     arr.push(MaxMin(day3))
     arr.push(MaxMin(day4))

     return arr;
     
     
}