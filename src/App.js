import React, {useEffect} from 'react';
import M from 'materialize-css'
import Weather from './components/weatherUI'

function App() {

  useEffect(()=>
  {
    M.AutoInit();

  })
  return (
    <div className="App">
      <Weather/>
    </div>
  );
}

export default App;
