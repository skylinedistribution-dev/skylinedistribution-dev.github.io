import React from 'react'

function ClickableCard ({ href, icon, title, body, button, big = false }) {
  return (
    <a className={`relative flex flex-col h-full items-center p-6 bg-white cursor-pointer rounded shadow-xl border-2 ${big ? 'col-span-full' : 'col-span-full sm:col-span-1'} transition ease-in-out duration-150 hover:scale-105`} href = { href } target = "__blank" >
      <div className="bg-[#00A5E9] p-3 rounded-full mb-2">{icon}</div>
      <h4 className="text-2xl font-bold leading-snug tracking-tight mb-1">{title}</h4>
      {body}
      <button className="bg-gray-800 hover:bg-[#00A5E9] text-white font-bold py-2 px-4 rounded mt-auto">{button}</button>
    </a >
  )
}

export default ClickableCard
