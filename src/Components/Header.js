import React from 'react'

function Header() {
  return (
    <>
    <div className='h-[15px] bg-[#012e57]'></div>
    <div className='w-[100vw]  flex items-center text-[#002647] font-[600] border-b-2  border-gray-300'> 
    <div className='p-4'>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
     <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
     </svg></div>
     <div>View Patient</div>
</div>
    

    </>
  )
}

export default Header