import React from 'react'
import { RxCaretLeft } from "react-icons/rx";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className='flex items-center justify-between p-2 text-lg text-white bg-zinc-900 font-semibold'>
        <RxCaretLeft size={30} fontWeight={800}/>
        <h2>Public Stories</h2>
        <IoMdInformationCircleOutline  size={20} fontWeight={600}/>
    </div>
  )
}

export default Header