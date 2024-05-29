import { useEffect, useState } from 'react'
import Planet from './components/Planet'

import './App.css'

function App() {
  const [bodies, setBodies] = useState([])

  useEffect(() => {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/', {
      method: "GET"
    })
    .then((response => response.json()))
    .then((data) => {
      let bodies = data.bodies
      
      // filter data by isPlanet key
      bodies = bodies.filter((planet) => (planet.isPlanet === true))

      setBodies(bodies)
    })
    .catch((error) => console.log("error: ", error))
  }, [])

  return (
    <div className="App">
      <div className="planet__row">
          {bodies.map(function(body) {
            return <Planet key={body.key} body={body} />
          })}
        </div>
    </div>
  );
}

export default App;
