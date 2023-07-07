import React, { useEffect, useRef, useState } from 'react'
import Transition from '../utils/Transition'

// Home and Kitchen
import HamiltonBeachSvg from '../images/hamilton_beach.svg'
import BrentwoodJpg from '../images/brentwood.jpg'
import LiquidIvPng from '../images/liquid_iv.png'
// import KeurigSvg from '../images/keurig.svg'
// import iRobotSvg from '../images/iRobot.svg'
// import NinjaSvg from '../images/ninja.svg'
// import SharkSvg from '../images/shark.svg'
// import DelonghiSvg from '../images/delonghi.svg'

// Health and Household
import GoliPng from '../images/goli.png'
import NewChapterPng from '../images/new_chapter.png'
import MaryRuthsSvg from '../images/mary_ruths.svg'

// Sports and Outdoors
import CelestronSvg from '../images/celestron.svg'
import SegwaySvg from '../images/segway.svg'
import AthlonPng from '../images/athlon.png'

// Small Appliances
import NespressoSvg from '../images/nespresso.svg'
import OsterPng from '../images/oster.png'
// import BrevilleSvg from '../images/breville.svg'

// Electronics
import GoogleSvg from '../images/google.svg'
import NintendoSvg from '../images/nintendo.svg'
import SceptreSvg from '../images/sceptre.svg'

// Icons
import GolfCourseIcon from '@mui/icons-material/GolfCourse'
import HomeIcon from '@mui/icons-material/Home'
import MicrowaveIcon from '@mui/icons-material/Microwave'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import SpeakerIcon from '@mui/icons-material/Speaker'

function Products () {
  const [tab, setTab] = useState(1)

  const tabs = useRef(null)

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
  }, [tab])

  return (
    <section className="relative" id="products">
      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-5xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Products</h1>
            <p className="text-xl text-gray-600">Skyline Distribution offers best-selling products in the most popular Amazon categories. Here is a small selection of our largest products.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">

              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">

              <a
                  className={`flex items-center text-lg p-3 sm:p-5 rounded border-2 transition duration-300 ease-in-out mb-1 sm:mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1) }}
                >
                    <div className="w-full flex justify-between font-bold leading-snug tracking-tight mb-1">
                      <div>Home and Kitchen</div>
                      <RestaurantMenuIcon />
                    </div>
                </a>

                <a
                  className={`flex items-center text-lg p-3 sm:p-5 rounded border-2 transition duration-300 ease-in-out mb-1 sm:mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2) }}
                >
                    <div className="w-full flex justify-between font-bold leading-snug tracking-tight mb-1">
                      <div>Health and Household</div>
                      <HomeIcon />
                    </div>
                </a>

                <a
                  className={`flex items-center text-lg p-3 sm:p-5 rounded border-2 transition duration-300 ease-in-out mb-1 sm:mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3) }}
                >
                    <div className="w-full flex justify-between font-bold leading-snug tracking-tight mb-1">
                      <div>Sports and Outdoors</div>
                      <GolfCourseIcon />
                    </div>
                </a>

                <a
                  className={`flex items-center text-lg p-3 sm:p-5 rounded border-2 transition duration-300 ease-in-out mb-1 sm:mb-3 ${tab !== 4 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(4) }}
                >
                    <div className="w-full flex justify-between font-bold leading-snug tracking-tight mb-1">
                      <div>Small Appliances</div>
                      <MicrowaveIcon />
                    </div>
                </a>

                <a
                  className={`flex items-center text-lg p-3 sm:p-5 rounded border-2 transition duration-300 ease-in-out ${tab !== 5 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(5) }}
                >
                    <div className="w-full flex justify-between font-bold leading-snug tracking-tight mb-1">
                      <div>Electronics</div>
                      <SpeakerIcon />
                    </div>
                </a>

              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right h-full">

                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full h-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative flex flex-col items-center justify-evenly h-full">
                    <img className="w-[60%] mt-12 md:mt-5 mb-20 md:mb-0" src={HamiltonBeachSvg} />
                    <img className="w-[60%] mb-20 md:mb-0" src={BrentwoodJpg} />
                    <img className="w-[55%] mb-16 md:mb-0" src={LiquidIvPng} />
                  </div>
                </Transition>

                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full h-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative flex flex-col items-center justify-evenly h-full">
                    <img className="max-w-[40%] mt-2 md:mt-0 mb-8 md:mb-2" src={GoliPng} />
                    <img className="max-w-[40%] mb-10 md:mb-5 rounded-md" src={NewChapterPng} />
                    <img className="max-w-[50%] mb-0 md:mb-0" src={MaryRuthsSvg} />
                  </div>
                </Transition>

                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full h-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative flex flex-col items-center justify-evenly h-full">
                    <img className="w-[50%] mb-14 md:mb-8" src={SegwaySvg} />
                    <img className="w-[60%] mb-14 md:mb-5" src={CelestronSvg} />
                    <img className="w-[60%] mb-6 md:mb-0" src={AthlonPng} />
                  </div>
                </Transition>

                {/* Item 4 */}
                <Transition
                  show={tab === 4}
                  appear={true}
                  className="w-full h-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative flex flex-col items-center justify-evenly h-full">
                    <img className="w-[60%] mt-10 md:mt-5 mb-20 md:mb-0" src={HamiltonBeachSvg} />
                    <img className="w-[55%] mb-20 md:mb-0" src={NespressoSvg} />
                    <img className="w-[30%] mb-20 md:mb-0" src={OsterPng} />
                  </div>
                </Transition>

                {/* Item 5 */}
                <Transition
                  show={tab === 5}
                  appear={true}
                  className="w-full h-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative flex flex-col items-center justify-evenly h-full">
                    <img className="w-[60%] mt-8 mb-12 md:mb-0" src={GoogleSvg} />
                    <img className="w-[60%] mb-12 md:mb-0" src={NintendoSvg} />
                    <img className="w-[60%] mb-12 md:mb-0" src={SceptreSvg} />
                  </div>
                </Transition>

              </div>
            </div >

          </div >

        </div >
      </div >
    </section>
  )
}

export default Products
