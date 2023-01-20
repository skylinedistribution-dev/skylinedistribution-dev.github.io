import React from 'react'
import SkylineLogoSVG from '../images/skylineLogoSVG.svg'

function HeroHome () {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-8xl mx-auto px-3 sm:px-6" >

        {/* Hero content */}
        <div className="md:pt-[30px] md:pb-10 0">
        <div className="absolute inset-0 bg-gray-900 pointer-events-none z-0" aria-hidden="true"></div>

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16 z-1">
            <img className="relative mx-auto w-3/5" src={SkylineLogoSVG} alt="Skyline Distribution"/>
            <div className="max-w-none mx-auto">
              <p className="italic text-gray-400 mb-8 text-3xl" data-aos="zoom-y-out" data-aos-delay="150">The world&apos;s leading distributor for all of the biggest brands</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300"></div>
            </div>
          </div>

          </div>

        </div>

    </section>
  )
}

export default HeroHome
