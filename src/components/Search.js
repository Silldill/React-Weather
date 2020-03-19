import React, {useState} from 'react'

export default function Search(prop)
{

    const [Value, SetValue] = useState()

    const onChange = (e) =>
    {
        SetValue(e.target.value)

    }
    const remove = () =>
    {
        document.getElementById('search').value = ''

    }

    const onSubmit = (e) =>
    {
        e.preventDefault();
        prop.Search(Value);
        
    }
    return(
        <div className="navbar-fixed">
        <nav>
        <div className="nav-wrapper">
        <form onSubmit={onSubmit}>
        <div className="input-field">
        <input id="search" onChange={onChange} type="search" required></input>
        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
        <i className="material-icons" onClick={remove}>close</i>
      </div>
      </form>
      </div>
      </nav>
      </div>
    );
}