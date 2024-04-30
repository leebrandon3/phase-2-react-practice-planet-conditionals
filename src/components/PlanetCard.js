import React, { useState } from 'react'
import PlanetFacts from "./PlanetFacts"

function PlanetCard({planet}) {

  const [toggle, setToggle] = useState(false)

  function handleClick(){
    setToggle(!toggle)
  }

  return (
    <div className="card" onClick={handleClick}>
      <h2>{planet.name}</h2>
      {toggle ? <PlanetFacts planet={planet} /> : <img className={planet.is_planet ? null : "not-planet"} src={planet.image} alt={planet.name} />}
    </div>
  )
}

export default PlanetCard
