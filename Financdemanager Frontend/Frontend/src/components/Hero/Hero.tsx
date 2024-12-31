import React from 'react'
import Goals from '../Goals'
import Balance from '../Balance/Balance'
import Expendeture from '../expendeture'
import './Hero.css'

export default function Hero() {
  return (
    <div className='p-8 h-[calc(100%-60px)] w-[100%] bg-slate-500'>
        <div className=" h-full w-full flex flex-row">
        <div className="side1 h-4/6 w-3/5">
        <Goals/>
        </div>
        <div className=" ml-8 side2 w-2/5 h-full overflow-y-scroll scrollbar-hide">
         <Balance/>
         <Expendeture/>
        </div>
        </div>
    </div>
  )
}
