import React, { useEffect, useRef, useState } from 'react'
import Transition from '../utils/Transition'
import ClickableCard from './ClickableCard'

import InventoryIcon from '@mui/icons-material/Inventory'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'

function GetStarted () {
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
    <section className="relative" id="get-started">
      <div className="relative mx-auto px-4 sm:px-6 mb-8">
        <div className="pt-24">

          {/* Section header */}
          <div className="max-w-5xl mx-auto text-center pb-12">
            <h1 className="h2 mb-4 text-sky-400">Get Started</h1>
            <p className="text-xl text-gray-300">Whether you are a budding business or seasoned seller we&apos;ve got you covered.</p>
          </div>

          {/* Section content */}
          <div className="w-full min-w-48">

            <div className="absolute inset-0 top-12 -bottom-8 bg-gray-900 pointer-events-none -z-1" aria-hidden="true"></div>

            <div className="md:grid md:grid-cols-12 md:gap-6 max-w-6xl mx-auto">

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">

                {/* Tabs buttons */}
                <div className="mb-8 md:mb-0">
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-300 border-transparent'}`}
                    href="#0"
                    onClick={(e) => { e.preventDefault(); setTab(1) }}
                  >
                    <div className="w-full flex justify-between font-bold leading-snug tracking-tight mb-1">
                      <div>Distribution</div>
                      <WarehouseIcon />
                    </div>
                  </a>

                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-300 border-transparent'}`}
                    href="#0"
                    onClick={(e) => { e.preventDefault(); setTab(2) }}
                  >
                    <div className="w-full flex justify-between font-bold leading-snug tracking-tight mb-1">
                      <div>Fulfillment</div>
                      <LocalShippingIcon />
                    </div>
                  </a>

                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-300 border-transparent'}`}
                    href="#0"
                    onClick={(e) => { e.preventDefault(); setTab(3) }}
                  >
                    <div className="w-full flex justify-between font-bold leading-snug tracking-tight mb-1">
                      <div>Amazon Seller Startup</div>
                      <InventoryIcon />
                    </div>
                  </a>

                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 4 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-300 border-transparent'}`}
                    href="#0"
                    onClick={(e) => { e.preventDefault(); setTab(4) }}
                  >
                    <div className="w-full flex justify-between font-bold leading-snug tracking-tight mb-1">
                      <div>Ungating</div>
                      <LockOpenIcon />
                    </div>
                  </a>

                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 5 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-300 border-transparent'}`}
                    href="#0"
                    onClick={(e) => { e.preventDefault(); setTab(5) }}
                  >
                    <div className="w-full flex justify-between font-bold leading-snug tracking-tight mb-1">
                      <div>Account Health</div>
                      <MonitorHeartIcon />
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
                    <ClickableCard
                      icon={<WarehouseIcon fontSize="large" sx={{ color: 'white' }} />}
                      title="Distribution"
                      body={
                        <p className="text-gray-600 text-lg text-center pb-5">
                          We have a comprehensive catalog of Amazon&apos;s best-selling products. Interested in our distribution services? Fill out this form below to get started.
                        </p>}
                      button="Distribution Inquiry Form"
                      href="https://forms.gle/vxVA4yMwKYhmp2yf6"
                    />
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
                    <ClickableCard
                      icon={<LocalShippingIcon fontSize="large" sx={{ color: 'white' }} />}
                      title="Fulfillment"
                      body={
                        <p className="text-gray-600 text-lg text-center pb-5">
                          We offer a complete Third Party Logistics (3PL) service, helping ecommerce merchants manage their supply chain.
                          Want us to fulfill your orders? Fill out this form below to get started.
                        </p>
                      }
                      button="Fulfillment Inquiry Form"
                      href="https://forms.gle/8PdBbaJNsu55sddh8"
                    />
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
                    <ClickableCard
                      icon={<InventoryIcon fontSize="large" sx={{ color: 'white' }} />}
                      title="Amazon Seller Startup"
                      body={
                        <p className="text-gray-600 text-lg text-center pb-5">
                          Starting the journey of selling on Amazon can be overwhelming, but you don&apos;t have to go through it alone.
                          <br /><br />
                          We will guide you through <strong>LLC Filing</strong>,<strong> Business Permit Applications</strong>,<strong> Amazon Seller Central Application</strong>,<strong> Account Setup/Navigation</strong>, and<strong> Business Email setup.</strong>
                        </p>}
                      button="Book a Call with our Amazon Startup Specialists"
                      href="https://calendly.com/skyline-distribution/amazon-seller-startup"
                      big
                    />
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
                    <ClickableCard
                      icon={<LockOpenIcon fontSize="large" sx={{ color: 'white' }} />}
                      title="Ungating"
                      body={
                        <p className="text-gray-600 text-lg text-center pb-5">
                          At Skyline, our team of experts are here to assist you in ungating restricted products on Amazon to reduce competition and set you apart as a seller.
                          <br /> <br />
                          Let us help you on your journey to success and profitability on the Amazon platform.
                        </p>
                      }
                      button="Book a Call with our Ungating Specialists"
                      href="https://calendly.com/skyline-distribution/ungating-services"
                      big
                    />
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
                    <ClickableCard
                      icon={<MonitorHeartIcon fontSize="large" sx={{ color: 'white' }} />}
                      title="Account Health"
                      body={
                        <p className="text-gray-600 text-lg text-center pb-5">
                          Maintaining good account health is crucial for any experienced seller looking to stay competitive on Amazon.
                          <br /> <br />
                          Skyline has a team of experts dedicated to resolving IP complaints, negative reviews, or account deactivation.
                          Let us help you get back to selling better than ever!
                        </p>
                      }
                      button="Book a Call with our Account Health Specialists"
                      href="https://calendly.com/skyline-distribution/account-health-services"
                      big
                    />
                  </Transition>

                </div>
              </div >

            </div >

          </div>

        </div >
      </div >
    </section>
  )
}

export default GetStarted
