import React from 'react'
import Hero from '../components/visitingcard/Hero'
import VisitingDetails from '../components/visitingcard/VisitingDetails'
import StylesSamples from '../components/visitingcard/StylesSamples'
import VisitingCta from '../components/visitingcard/VisitingCta'

const VisitingCard = () => {
  return (
    <div>
      <Hero/>
      <VisitingDetails/>
      <StylesSamples/>
      <VisitingCta/>
    </div>
  )
}

export default VisitingCard
