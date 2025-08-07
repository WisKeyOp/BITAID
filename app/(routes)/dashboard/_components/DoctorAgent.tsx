import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


export type DoctorAgent = {
  id:number,
  specialist:string,
  description:string,
  image:string,
  agentPrompt:string,
  voiceId?: string;
}
type props={
  doctorAgent: DoctorAgent
}
const DoctorAgent = ({ doctorAgent }: props) => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-600 h-full flex flex-col">
        <Image src={doctorAgent.image} alt={doctorAgent.specialist} width={200} height={300} 
        className='w-full object-cover h-[250px] rounded-lg mb-4 flex-shrink-0'/>
        <div className="flex flex-col flex-grow">
          <h2 className='font-bold text-lg text-white mb-2'>{doctorAgent.specialist }</h2>
          <p className='text-sm text-gray-300 mb-4 flex-grow'>{doctorAgent.description}</p>
          <Button className='w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:shadow-lg mt-auto'>
            Start Consultation 
          </Button>
        </div>
    </div>
  )
}

export default DoctorAgent
