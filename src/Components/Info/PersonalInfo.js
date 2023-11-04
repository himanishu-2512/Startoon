import React from 'react'

function PersonalInfo({props}) {
  return (
    <div className='flex items-center w-[90%] justify-between my-3'>
     <div className=''> 
        <div className='flex items-center text-[#012e57] font-[600]'>
            <div>{props.name}, </div>
            <div className=' pl-1'>{props.gender}/{props.age}</div>
        </div>
        <div className='text-[#012e57] font-[500] text-[12px]'>Patient ID: <span className='font-[450]'>{props._id}</span></div>
     </div>
     <div className='text-[#012e57]'><img width="40" height="40" src="https://img.icons8.com/windows/32/012e57/user-male-circle.png" alt="user-male-circle"/></div>
    </div>
  )
}

export default PersonalInfo