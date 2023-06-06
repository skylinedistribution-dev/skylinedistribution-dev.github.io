import React from 'react'
import SkylineLogo from '../images/skylineLogoWhite.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Footer () {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-10">

        {/* Top area: Blocks */}
        <div className="grid grid-cols-4 border-t border-gray-200 py-5 gap-5">

            <div className="flex justify-center items-center">
              <img className="w-[250px]" src={SkylineLogo} />
            </div>

            <div className="flex justify-center items-center">
              <div className="text-center">
                <h6 className="font-bold text-gray-800 text-sm sm:text-lg mb-2">Contact Us</h6>
                <ul className="text-xs sm:text-md text-gray-600">
                  <li className="mb-2">info@skyline-distribution.com</li>
                    <li className="hidden sm:block"><MailOutlineIcon /></li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="text-center">
                <h6 className="font-bold text-gray-800 text-sm sm:text-lg mb-2">Telegram</h6>
                <ul className="text-xs sm:text-md text-gray-600">
                  <li className="mb-2 hidden sm:block"><a href="https://t.me/skylinedeals">Join our channel</a></li>
                  <li className="sm:mb-2 mb-5"><a href="https://t.me/skylinedeals"><SendOutlinedIcon /></a></li>
                </ul>
              </div>
            </div>

          <div className="flex justify-center items-center">
            <div className="text-center">
              <h6 className="font-bold text-gray-800 text-sm sm:text-lg mb-2">Follow Us</h6>
              <ul className="text-xs sm:text-md text-gray-600">
                <li className="mb-2 hidden sm:block"><a href="https://www.instagram.com/skylinedistribution/">@skylinedistribution</a></li>
                <li className="sm:mb-2 mb-5"><a href="https://www.instagram.com/skylinedistribution/"><InstagramIcon /></a></li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </footer>
  )
}

export default Footer
