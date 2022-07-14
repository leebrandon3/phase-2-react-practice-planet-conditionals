import React from 'react'
import PlanetFacts from "./PlanetFacts"

function PlanetCard({planet}) {

  return (
    <div className="card" onClick={() => console.log('Toggle!')}>
      <h2>{planet.name}</h2>
      <img className="" src={planet.image} alt={planet.name} />
    </div>
  )
}

export default PlanetCard
