
export default function GetDate(DateUnix)
{
    var a = new Date(DateUnix * 1000).toLocaleDateString("sv-SE")
    var b = new Date(DateUnix * 1000).toLocaleTimeString("sv-SE")
    return a + " " + b

}