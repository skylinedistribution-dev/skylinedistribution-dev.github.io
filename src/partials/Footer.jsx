import React from "react";
import SkylineLogo from "../images/skylineLogo.svg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        {/* Top area: Blocks */}
        <div className="grid grid-cols-2 border-t border-gray-200 py-5 gap-5">
          <div className="flex justify-center items-center">
            <img className="w-[250px]" src={SkylineLogo} />
          </div>

          <div className="flex justify-center items-center">
            <div className="text-center">
              <h6 className="font-bold text-gray-300 text-sm sm:text-lg mb-2">
                Contact Us
              </h6>
              <ul className="text-xs sm:text-md text-gray-400">
                <li className="mb-2">info@skyline-distribution.com</li>
                <li className="hidden sm:block">
                  <MailOutlineIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
