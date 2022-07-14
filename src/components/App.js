import React, { useState, useEffect } from 'react'
import StarField from '../visual-effects/StarField'
import PlanetsContainer from "./PlanetsContainer"

function App() {

  const [planets, setPlanets] = useState([])
  const [lightMode, setLightMode] = useState(false)

  const toggleLightMode = () => setLightMode(lightMode => !lightMode)

  useEffect(() => {
    fetch('http://localhost:4001/planets')
    .then(res => res.json())
    .then(data => setPlanets(data))
  }, [])

  return (
    <div className={`App ${lightMode ? 'light-mode' : null}`}>

      {/* You won't have to touch StarField, it's just here for visual things */}
      <StarField />

      <button onClick={toggleLightMode}>{lightMode ? 'Light' : 'Dark'} Mode</button>

      <PlanetsContainer planets={planets} />

    </div>
  );
}

export default App;
