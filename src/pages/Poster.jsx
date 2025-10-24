import React from 'react'
import Hero from '../components/posters/Hero'
import PosterDetails from '../components/posters/PosterDetails'
import WhyChoose from '../components/posters/WhyChoose'
import PosterCta from '../components/posters/PosterCta'

const Poster = () => {
  return (
    <div>
      <Hero/>
      <PosterDetails/>
      <WhyChoose/>
      <PosterCta/>
    </div>
  )
}

export default Poster
