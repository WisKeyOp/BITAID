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
      className={`flex flex-col items-center border-2 rounded-2xl w-full max-w-[200px] shadow p-4 sm:p-5
      hover:border-blue-500 cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        selectedDoctor?.id === doctorAgent.id ? 'border-blue-500 bg-blue-50' : 'border-transparent'
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
            className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-600"
            aria-hidden="true"
          >
            <span className="text-lg font-medium">
              {doctorAgent.specialist?.charAt(0) || 'D'}
            </span>
          </div>
        )}
      </div>
      <h2 className="font-bold text-center text-sm sm:text-base text-gray-900">
        {doctorAgent.specialist || 'Doctor'}
      </h2>
      {doctorAgent.description && (
        <p className="text-xs text-center text-gray-600 mt-1 line-clamp-2">
          {doctorAgent.description}
        </p>
      )}
    </article>
  );
};

export { SuggestedDoctorCard };
