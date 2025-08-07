import React, { useState } from 'react';
import { DoctorAgent } from './DoctorAgent';
import Image from 'next/image';

type Props = {
  doctorAgent: DoctorAgent;
  setSelectedDoctor: (doctor: DoctorAgent) => void;
  selectedDoctor: DoctorAgent | undefined;
};

const SuggestedDoctorCard = ({ doctorAgent, setSelectedDoctor, selectedDoctor }: Props) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <article 
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setSelectedDoctor(doctorAgent);
        }
      }}
      className={`flex flex-col items-center border-2 rounded-2xl w-full max-w-[200px] shadow-lg p-4 sm:p-5
      hover:border-purple-500 cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
        selectedDoctor?.id === doctorAgent.id 
          ? 'border-purple-500 bg-gradient-to-br from-purple-900/50 to-blue-900/50' 
          : 'border-slate-600 bg-slate-800 hover:bg-slate-700'
      }`}
      onClick={() => setSelectedDoctor(doctorAgent)}
      aria-pressed={selectedDoctor?.id === doctorAgent.id}
    >
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden mb-3">
        {doctorAgent.image && !imageError ? (
          <Image 
            src={doctorAgent.image} 
            alt={`${doctorAgent.specialist || 'Doctor'} profile picture`}
            width={56}
            height={56}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
            priority={false}
            loading="lazy"
          />
        ) : (
          <div 
            className="w-full h-full bg-slate-600 flex items-center justify-center text-gray-300"
            aria-hidden="true"
          >
            <span className="text-lg font-medium">
              {doctorAgent.specialist?.charAt(0) || 'D'}
            </span>
          </div>
        )}
      </div>
      <h2 className="font-bold text-center text-sm sm:text-base text-white">
        {doctorAgent.specialist || 'Doctor'}
      </h2>
      {doctorAgent.description && (
        <p className="text-xs text-center text-gray-300 mt-1 line-clamp-2">
          {doctorAgent.description}
        </p>
      )}
    </article>
  );
};

export { SuggestedDoctorCard };
