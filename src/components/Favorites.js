import Cookies from 'universal-cookie';
import React from 'react'
const Favorites = (prop) =>
{



const OpenFavorite = (e) =>
{

   prop.Search(e.target.id)

}

const RemoveFavorite = (e) =>
{
    prop.Remove(e.target.id)

}

return(<div>
    <div className="chip">
    <button style={{border: "none", background: "Transparent"}} id="Stockholm" onClick={OpenFavorite}>Stockholm</button>
    <i id="Stockholm" onClick={RemoveFavorite} className="close material-icons">close</i>
  </div>
  <div className="chip">
  <button style={{border: "none", background: "Transparent"}} id="Uppsala" onClick={OpenFavorite}>Uppsala</button>  
    <i id="Uppsala" onClick={RemoveFavorite} className="close material-icons">close</i>
  </div>
</div>)
}

export default Favorites