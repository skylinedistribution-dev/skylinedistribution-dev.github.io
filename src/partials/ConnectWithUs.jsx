import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CallIcon from '@mui/icons-material/Call';

function ConnectWithUs() {
  return (
    <section className="relative" id="connect-with-us">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-24 sm:pb-24">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="h2 mb-4 pb-6 sm:pb-24">Connect With Us</h1>
          </div>

          <div className="flex flex-row justify-center items-center justify-between pb-8">
          <div className="flex justify-center items-center">
              <div className="text-center">
                <h6 className="font-bold text-gray-800 text-sm sm:text-xl mb-2">
                  WhatsApp
                </h6>
                <ul className="text-xs sm:text-md text-gray-600">
                  <li className="mb-2 hidden sm:block">
                    <a href="https://whatsapp.com/channel/0029VaJXjQF1dAw5PdluFs24">Join our WhatsApp</a>
                  </li>
                  <li className="sm:mb-2 mb-5">
                    <a href="https://whatsapp.com/channel/0029VaJXjQF1dAw5PdluFs24">
                      <WhatsAppIcon fontSize="large"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-center">
                <h6 className="font-bold text-gray-800 text-sm sm:text-xl mb-2">
                  Discord
                </h6>
                <ul className="text-xs sm:text-md text-gray-600">
                  <li className="mb-2 hidden sm:block">
                    <a href="https://discord.com/invite/TBms2eBbk3">Join our Discord Community</a>
                  </li>
                  <li className="sm:mb-2 mb-5">
                    <a href="https://discord.com/invite/TBms2eBbk3">
                      <SmartToyIcon fontSize="large"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-center">
                <h6 className="font-bold text-gray-800 text-sm sm:text-xl mb-2">
                  Telegram
                </h6>
                <ul className="text-xs sm:text-md text-gray-600">
                  <li className="mb-2 hidden sm:block">
                    <a href="https://t.me/skylinedeals">Join our channel</a>
                  </li>
                  <li className="sm:mb-2 mb-5">
                    <a href="https://t.me/skylinedeals">
                      <SendOutlinedIcon fontSize="large"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="text-center">
                <h6 className="font-bold text-gray-800 text-sm sm:text-xl mb-2">
                  Instagram
                </h6>
                <ul className="text-xs sm:text-md text-gray-600">
                  <li className="mb-2 hidden sm:block">
                    <a href="https://www.instagram.com/skylinedistribution/">
                      @skylinedistribution
                    </a>
                  </li>
                  <li className="sm:mb-2 mb-5">
                    <a href="https://www.instagram.com/skylinedistribution/">
                      <InstagramIcon fontSize="large"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="text-center">
                <h6 className="font-bold text-gray-800 text-sm sm:text-xl mb-2">
                  Phone
                </h6>
                <ul className="text-xs sm:text-md text-gray-600">
                  <li className="mb-2 hidden sm:block">
                    <a href="tel:409-207-8787">
                    409-207-8787
                    </a>
                  </li>
                  <li className="sm:mb-2 mb-5">
                    <a href="tel:409-207-8787">
                      <CallIcon fontSize="large"/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectWithUs;
