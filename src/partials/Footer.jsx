import React from 'react'
import skylineLogo from '../images/skylineLogoWhite.svg'

function Footer () {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">

        {/* Top area: Blocks */}
        <div className="grid grid-cols-2 border-t border-gray-200">

          {/* 1st block */}
          <div className="flex justify-center items-center">
            <img className="w-[250px]" src={skylineLogo} />
          </div>

          {/* 2th block */}
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h6 className="font-bold text-gray-800 text-md sm:text-lg mb-2">Contact Us</h6>
              <ul className="text-sm sm:text-md text-gray-600">
                <li className="mb-2">Skyline Distribution</li>
                <li className="mb-2">5708 N Shepherd Dr, STE-D2, Houston TX, 77091</li>
                <li className="mb-2">info@skyline-distribution.com</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
