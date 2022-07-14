import React, { useState } from 'react'
import PlanetFacts from "./PlanetFacts"

function PlanetCard({planet}) {

  const [showImage, setShowImage] = useState(true)

  return (
    <div className="card" onClick={() => setShowImage(prev => !prev)}>
      <h2>{planet.name}</h2>
      {
        showImage
        ?
        <img className={planet.is_planet ? null : "not-planet"} src={planet.image} alt={planet.name} />
        :
        <PlanetFacts planet={planet} />
      }
    </div>
  )
}

export default PlanetCard
