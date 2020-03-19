
export default function(TimeStamp)
{
    var days = ['Söndag','Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag']
    var date = new Date(TimeStamp * 1000);
    return days[date.getDay(TimeStamp)]
}