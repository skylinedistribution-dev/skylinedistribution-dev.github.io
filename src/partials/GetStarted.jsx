import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import React from 'react'
import ClickableCard from './ClickableCard'

function GetStarted () {
  return (
    <section className="relative" id="get-started">

      <div className="relative mx-auto">
        <div className="py-12 md:py-20 w-full">

          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-12 px-6">
            <h2 className="h2 mb-4">Get Started</h2>
            <p className="text-xl text-gray-600">Whether you are a budding business or seasoned seller we&apos;ve got you covered.</p>
          </div>

          <div className="w-full relative">

            <div className="absolute inset-0 -top-8 -bottom-8 bg-gray-900 pointer-events-none" aria-hidden="true"></div>

            {/* List of Services and Inquiry Forms */}
            <div className="relative mx-auto max-w-6xl grid gap-6 grid-cols-2 px-6">

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
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
