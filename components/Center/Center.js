import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { shuffle } from 'lodash'

const colors = [
  'bg-gradient-to-b from-green-500 to-black',
  'bg-gradient-to-b from-blue-500 to-black',
  'bg-gradient-to-b from-pink-500 to-black',
  'bg-gradient-to-b from-yellow-500 to-black',
  'bg-gradient-to-b from-purple-500 to-black',
  'bg-gradient-to-b from-red-500 to-black',
  // 'from-green-500',
  // 'from-blue-500',
  // 'from-pink-500',
  // 'from-yellow-500',
  // 'from-purple-500',
  // 'from-red-500',

]

const Center = () => {
  const { data: session} = useSession()
  // console.log('session --->', session)
  
  const[color, setColor] = useState('null')

  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [])

  return (
    <div className='flex-grow text-white'>
      <h1>Center</h1>
      <header className='absolute top-5 right-6'>
        <div className='flex items-center bg-green-300 space-x-3 opacity-90 hover:opacity-75 cursor-pointer p-1 pr-2'>
          <img className='rounded-full w-10 h-10' src={session?.user.image} alt='' />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className='h-5 w-5' />
        </div>
      </header>

      <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-6`}>
        <h1>TESTING</h1>
        
      </section>
    </div>
  )
}

export default Center