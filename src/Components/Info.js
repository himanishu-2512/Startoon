import React from 'react'
import PersonalInfo from './Info/PersonalInfo'
import Container from './Info/Container'
import PatientInfo from './Info/PatientInfo'
import MedicalHistory from './Info/MedicalHistory'


function Info({props}) {
  return (
    <>
    <div className='flex flex-col items-center'>
    <PersonalInfo props={props}/>
    <Container/>
    <PatientInfo props={props}/>
    <div className=' border-y-2 mt-5 border-[#bcbcbc] w-[100%] justify-center flex'><MedicalHistory props={props}/></div>
    
    </div>
   
    </>
  )
}

export default Info