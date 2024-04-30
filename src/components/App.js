import React, { useState, useEffect, useCallback } from 'react'
import StarField from '../visual-effects/StarField'
import PlanetsContainer from "./PlanetsContainer"

function App() {

  const [planets, setPlanets] = useState([])
  const [lightMode, setLightMode] =  useState(false)

  useEffect(() => {
    console.log('fetching planets...')
    fetch('http://localhost:4001/planets')
    .then(res => res.json())
    .then(data => setPlanets(data))
  }, [])

  function handleClick(){
    setLightMode(!lightMode)
    console.log("Toggle")
  }

  return (
    <div className={lightMode ? "App light-mode" : "App"}>

      {/* You won't have to touch StarField, it's just here for visual things */}
      <StarField />

      <button onClick={handleClick}>Light Mode</button>

      <PlanetsContainer planets={planets} />

    </div>
  );
}

export default App;
