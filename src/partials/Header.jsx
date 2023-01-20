import React, { useEffect, useState } from 'react'
import Favicon from '../favicon.svg'
import Transition from '../utils/Transition'
import NavMenu from './NavMenu'
import { HashLink } from 'react-router-hash-link'

function Header () {
  const [top, setTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={'fixed w-full z-30 lg:bg-opacity-90 transition duration-300 ease-in-out bg-white backdrop-blur-sm shadow-lg'}>
      <div className="max-w-6xl mx-auto px-5 lg:px-6">

        <nav className="flex-col">
          <div className="flex items-center justify-between h-12 lg:h-12">

            <HashLink className="flex-shrink-0 mr-4 cursor-pointer" to="#skyline">
              <img className="w-10" src={Favicon} alt="Skyline Distribution" />
            </HashLink>

            {/* Site navigation */}
            <div className="flex flex-grow">
              <div className="flex flex-grow justify-end flex-wrap items-center">
                <ul className={'hidden lg:flex flex-grow justify-end flex-wrap items-center'}>
                  <NavMenu />
                </ul>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer lg:hidden block" onClick={() => setMenuOpen(!menuOpen)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
            </div>

          </div>

          <Transition
            show={menuOpen}
            appear={true}
            className="w-full"
            enter="transition ease-in-out duration-200 transform order-first"
            enterStart="opacity-0 -translate-y-16"
            enterEnd="opacity-100 translate-y-0"
            leave="transition ease-in-out duration-200 transform order-first"
            leaveStart="opacity-100"
            leaveEnd="opacity-0 -translate-y-16">
            <div className="flex justify-center align-center">
              <ul className={'flex-col lg:hidden justify-end items-center pb-3'}>
                <NavMenu />
              </ul>
            </div>
          </Transition>
        </nav>

      </div>
    </header>
  )
}

export default Header
