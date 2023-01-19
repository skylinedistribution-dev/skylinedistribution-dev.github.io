import React from 'react'

import FeaturesHome from '../partials/Features'
import FeaturesBlocks from '../partials/FeaturesBlocks'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import HeroHome from '../partials/HeroHome'
import Newsletter from '../partials/Newsletter'
import Testimonials from '../partials/Testimonials'

function Home () {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  )
}

export default Home
