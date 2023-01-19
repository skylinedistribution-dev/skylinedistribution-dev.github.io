import React from 'react'
import { Link } from 'react-router-dom'

function NavMenu () {
  return (
    <>
      <li>
        <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">About</Link>
      </li>
      <li>
        <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Get Started</Link>
      </li>
      <li>
        <Link to="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Services</Link>
      </li>
    </>
  )
};

export default NavMenu
