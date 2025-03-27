import React from 'react'

type Props = {}

function EpicCard({}: Props) {
  return (
    <div className='flex justify-center items-center h-50 w-70 bg-linear-65 from-purple-500 to-pink-500 rounded-lg'>
        <div className='text-2xl font-medium text-black'>EpicCard</div>
    </div>
  )
}

export default EpicCard