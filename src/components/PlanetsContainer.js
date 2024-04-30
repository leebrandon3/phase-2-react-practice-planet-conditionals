import React from 'react'
import PlanetCard from "./PlanetCard"

function PlanetContainer({planets}) {

  const mappedPlanets = planets.map(planet => <PlanetCard planet={planet} key={planet.id}/>)

  return (
    <div className="flex container">

      {mappedPlanets}

    </div>
  )
}

export default PlanetContainer
