// with help from tailwindcomponents - Harrishash
import React from 'react';
import './TeamCard.css';

function TeamCard({ member, image }) {
  return (
    <div className='relative mx-auto w-11/12 my-16 h-full'>
      <div className='rounded overflow-hidden shadow-md bg-white pb-14'>
        <div className='absolute -mt-20 w-full flex justify-center'>
          <div className='h-32 w-32'>
            <img src={image} className='rounded-full object-cover h-full w-full shadow-md' />
          </div>
        </div>
        <div className='px-6 mt-16'>
          <h1 className='font-bold text-3xl text-center mb-1'>{member.fullName}</h1>
          <p className='text-gray-800 text-sm text-center'>{member.title}</p>
          <p className='text-center text-gray-600 text-base pt-3 font-normal line-clamp-3'>
            {member.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
