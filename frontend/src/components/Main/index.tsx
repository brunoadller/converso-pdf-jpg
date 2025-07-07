"use client"
import React from 'react'
import { FaRegFilePdf } from "react-icons/fa6";

const Main = () => {

  const handleSubmitForm = () => {

  }
  return (
    <div className='w-full border  border-gray-400 p-5 0 rounded-md flex gap-5 flex-col items-center justify-center '>
      <div className='w-full flex flex-col 
      justify-center 
      items-center border rounded-md border-dashed border-gray-400 p-5'>
        <FaRegFilePdf className='text-white' size={50} />
        <input type='file' 
        accept="application/pdf"
        className='text-white text-[14px] flex text-sm sm:text-xl md:text-2xl'/>
        <p className='text-gray-500 text-sm'>ou arraste e solte um arquivo</p>
      </div>
      <form onSubmit={handleSubmitForm}
        className='flex flex-col gap-4 items-center justify-center'
      >
        <div className='flex gap-3'>
          <input className='cursor-pointer' 
          type="checkbox" value={''} name='check' />
          <label className='text-white f'>Renomear os arquivos JPG numericamente</label>
        </div>
        <button className='bg-white py-3 w-full rounded-md cursor-pointer text-gray-900 font-bold text-2xl'
        type='submit'>Converter</button>
      </form>
    </div>
  
  )
}

export default Main
