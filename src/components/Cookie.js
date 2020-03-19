import Cookies from 'universal-cookie';

const HandleCookie = () =>
{
    const AddCookie = (name) =>
    {

    const cookie = new Cookies();
    console.log(cookie.get('favorites'))
    if(cookie.get('favorites') !== undefined)
    {
        console.log('inne')
        var arr = cookie.get('favorites')
        console.log(arr)
        // arr.push(name)
        // cookie.set('favorites', arr, { path: '/'})
        // var arr = JSON.parse(cookie.get('favorites'))
        // console.log(arr)
        // arr.push('name')
        // let str = JSON.stringify(arr);
        // cookie.set('favorites', str, { path: '/'})

    }
    else
    {
        
        var arr = []
        arr.push(name)
        arr.
        cookie.set('favorites', arr, { path: '/'})

    }
    }
}