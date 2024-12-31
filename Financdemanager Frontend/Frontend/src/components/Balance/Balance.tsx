import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card'
import { Input } from '../ui/input';



function getBalance() {
  
  setBalance(1000);
  
}
export default function Balance() {
  const [balance, setBalance] = useState(100);
  return (
    <div>
      <Card className='relative'>
        <CardHeader className='font-mono'>
       <div className='flex flex-row gap-8 justify-between items-center '> <CardTitle className='text-5xl'>Balance</CardTitle>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Add Balance</button></div>
        <div className='p-4 flex items-center gap-4'> 
          <Input className='Balance w-3/4' placeholder='Add/Subtract Balance'></Input> 
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Add</button>
        </div>
        <CardDescription>Monthly Balance</CardDescription>

        </CardHeader>
        <CardContent>
            <div className='text-5xl font-mono text-center'>
            <span className='text-gray-700'>${balance}</span>
            </div>
        </CardContent>

        
        
      </Card>
    </div>
  )
}
