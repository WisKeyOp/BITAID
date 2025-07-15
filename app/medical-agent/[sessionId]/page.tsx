"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function MedicalVoiceagent() {
  const {sessionId,} = useParams();
  const GetSessionDetails = ()=>{
    
  }
  return (
    <div>
      {sessionId}
    </div>
  )
}

export default MedicalVoiceagent
