import React from 'react'

import AboutUs from '../partials/AboutUs'
import Footer from '../partials/Footer'
import GetStarted from '../partials/GetStarted'
import Header from '../partials/Header'
import HeroHome from '../partials/HeroHome'
import Products from '../partials/Products'
import Pricing from '../partials/Pricing'
import Testimonials from '../partials/Testimonials'
import ConnectWithUs from '../partials/ConnectWithUs'
import DelayedForm from '../partials/DelayedForm'
import ContactForm from '../partials/ContactForm'

function Home () {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <HeroHome />
        <AboutUs />
        <Products />
        <GetStarted />
        <Pricing />
        <Testimonials />
        <ConnectWithUs />
        <ContactForm />
        <DelayedForm />
      </main>

      <Footer />

    </div>
  )
}

export default Home
