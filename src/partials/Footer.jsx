import React from 'react'
import skylineLogo from '../images/skylineLogoWhite.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer () {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid grid-cols-3 border-t border-gray-200 py-5 gap-5">

            {/* 1st block */}
            <div className="flex justify-center items-center">
              <img className="w-[250px]" src={skylineLogo} />
            </div>

            {/* 2nd block */}
            <div className="flex justify-center items-center">
              <div className="text-center">
                <h6 className="font-bold text-gray-800 text-sm sm:text-lg mb-2">Contact Us</h6>
                <ul className="text-xs sm:text-md text-gray-600">
                  <li className="mb-2">info@skyline-distribution.com</li>
                  <MailOutlineIcon />
                </ul>
              </div>
            </div>

            {/* 3rd block */}
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h6 className="font-bold text-gray-800 text-sm sm:text-lg mb-2">Follow Us</h6>
              <ul className="text-xs sm:text-md text-gray-600">
                <li className="mb-2"><a href="https://www.instagram.com/skylinedistribution/">@skylinedistribution</a></li>
                <li className="mb-2"><a href="https://www.instagram.com/skylinedistribution/"><InstagramIcon /></a></li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </footer>
  )
}

export default Footer
