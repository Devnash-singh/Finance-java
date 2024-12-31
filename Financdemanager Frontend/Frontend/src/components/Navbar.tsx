import React from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <div className='flex justify-between p-4 bg-gray-100 h-[60px]'>
    <div className="s1 flex  items-center">
      <div> <img src={logo} alt="Loading image" className='h-[50px] mr-5' /></div>
      <div className="text-2xl font-bold text-blue-400 font-serif ">MoneyMatters</div>
    </div>
    <div className="s2 my-auto">
    <ul className="flex space-x-14">
      <li className="transform transition-transform hover:scale-110">About</li>
      <li className="transform transition-transform hover:scale-110">Login</li>
      <li className="transform transition-transform hover:scale-110">Tools</li>
      <li className="transform transition-transform hover:scale-110">Profile</li>
    </ul></div>
    </div>
  )
}
