import React from 'react'
import { RxCaretDown } from 'react-icons/rx'
import { dummyData } from '../data/data'
import StoryBox from './StoryBox'

const Stories = () => {
  return (
    <div className='text-white bg-zinc-900 py-2 px-4 flex flex-col gap-2'>
        <div className='flex items-center justify-between font-semibold'>
            <h3>Public Stories</h3>
            <div className=' rounded-2xl py-[2px] text-center px-3 font-semibold bg-zinc-800 text-sm text-zinc-100 flex items-center gap-1'>
                <small>Snap Views</small>
                <RxCaretDown/>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-1.5 justify-between md:grid-cols-5 lg:grid-cols-7'>
            {
                dummyData.map((item)=>(
                    <StoryBox data={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Stories