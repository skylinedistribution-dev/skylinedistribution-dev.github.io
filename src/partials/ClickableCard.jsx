import React from 'react'

function ClickableCard ({ icon, title, body, button }) {
  return (
    <a className="relative flex flex-col items-center p-6 bg-white cursor-pointer rounded shadow-xl border-2 transition ease-in-out duration-150 hover:scale-105 col-span-2 sm:col-span-1" href="https://genrandom.com/cats/" target="__blank">
      <div className="bg-[#00A5E9] p-3 rounded-full mb-2">
        {icon}
      </div>
      <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">{title}</h4>
      <p className="text-gray-600 text-lg text-center pb-5">{body}</p>

      <button className="bg-gray-800 hover:bg-[#00A5E9] text-white font-bold py-2 px-4 rounded mt-auto">{button}</button>
    </a>
  )
}

export default ClickableCard
