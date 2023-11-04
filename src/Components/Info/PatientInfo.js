import React from 'react'

function PatientInfo({props}) {
  return (
    <div className='w-[80%] mt-10'>
        <div>
            <ul>
                <div className='flex  width-[80%] text-xs relative my-1'>
                <li className='text-[#7d7d7d]'>Phone Number</li>
                <li className='absolute left-[50%] font-[450] text-[#002647] flex items-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2 h-2 mr-1">
  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
</svg> 
{props.phoneNo}</li>
                </div>
                <div className='flex  width-[80%] text-xs relative my-1'>
                <li className='text-[#7d7d7d] '>Mail ID</li>
                <li className='absolute left-[50%] font-[450] text-[#002647] flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

                    {props.email}</li>
                </div>
                <div className='flex text-xs width-[80%] relative my-1'>
                <li className='text-[#7d7d7d]'>Affected Side</li>
                <li className='absolute left-[50%] font-[450] text-[#002647] flex items-center'>
                <img width="15" height="15" className='mr-1' src="https://img.icons8.com/plasticine/100/torso.png" alt="torso"/>{props.affected}</li>
                </div>
                <div className='flex text-xs width-[80%] relative my-1'>
                <li className='text-[#7d7d7d]'>Condition</li>
                <li className='absolute left-[50%] font-[450] text-[#002647] flex items-center'>
                <img width="15" height="15" className='mr-1' src="https://img.icons8.com/ios-filled/50/000000/knee-joint.png" alt="knee-joint"/>{props.condition}</li>
                </div>
                <div className='flex text-xs width-[80%] relative my-1'>
                <li className='text-[#7d7d7d]'>Speciality</li>
                <li className='absolute left-[50%] font-[450] text-[#002647] flex items-center'>
                <img width="15" height="15" className='mr-1' src="https://img.icons8.com/ios/50/doctors-bag--v1.png" alt="doctors-bag--v1"/>{props.speciality}</li>
                </div>
                
                
            </ul>
        </div>
    </div>
  )
}

export default PatientInfo