import React from 'react'
import { HashLink } from 'react-router-hash-link'

function NavMenu () {
  return (
    <>
      <li>
        <HashLink to="#about-us" className="font-medium text-xl text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">About</HashLink>
      </li>
      <li>
        <HashLink to="#products" className="font-medium text-xl text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Products</HashLink>
      </li>
      <li>
        <HashLink to="#get-started" className="font-medium text-xl text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Get started</HashLink>
      </li>
      <li>
        <HashLink to="#testimonials" className="font-medium text-xl text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Testimonials</HashLink>
      </li>
    </>
  )
};

export default NavMenu
