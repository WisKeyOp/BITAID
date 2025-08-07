import React from 'react'
import { AIDoctorAgents } from '@/list/list'
import DoctorAgentCard from '@/app/(routes)/dashboard/_components/DoctorAgent'
const DoctorsAgentList = () => {
  return (
    <div className='mt-10'>
      <h2 className='font-bold text-2xl text-white mb-6'>AI Specialist Doctors</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-stretch'>
        {AIDoctorAgents.map((doctor, index) => (
          <div key={index} className="h-full"> 
            <DoctorAgentCard doctorAgent={doctor}/>
          </div>
        ))}      
      </div>
    </div>
  )
}

export default DoctorsAgentList
