import React from 'react'
import skylineLogoSVGBlack from '../images/skylineLogoSVGBlack.svg'

function Footer () {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">

        {/* Top area: Blocks */}
        <div className="flex justify-between py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div>
            <div className="mb-2">
              <img src={skylineLogoSVGBlack}/>
            </div>
          </div>

          {/* 5th block */}
          <div>
            <h6 className="font-bold text-gray-800 text-2xl mb-2">Contact Us</h6>
            <ul className="text-lg text-gray-600">
              <li className="mb-2">Skyline Distribution</li>
              <li className="mb-2">5708 N Shepherd Dr, STE-D2, Houston TX, 77091</li>
              <li className="mb-2">832-492-1377</li>
              <li className="mb-2">info@skyline-distribution.com</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
