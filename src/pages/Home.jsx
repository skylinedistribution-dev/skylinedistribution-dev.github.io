import React from 'react'

import FeaturesHome from '../partials/Features'
import Footer from '../partials/Footer'
import GetStarted from '../partials/GetStarted'
import Header from '../partials/Header'
import HeroHome from '../partials/HeroHome'
import Testimonials from '../partials/Testimonials'

function Home () {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <GetStarted />
        <Testimonials />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  )
}

export default Home
