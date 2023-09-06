import React from 'react';
import { TEAM_LIST } from '../assets/TEAM_LIST';
import TeamCard from '../components/team/TeamCard';
import himani from '../assets/images/himani.jpeg';
import jumana from '../assets/images/jumana.jpeg';
import lindsey from '../assets/images/lindsey.jpeg';
import arman from '../assets/images/arman.png';
import brooke from '../assets/images/brooke.png'

function Team() {
  const images = [himani, arman, jumana, brooke, lindsey];
  return (
    <div>
      <div class='w-full bg-gray-50 px-10'>
        <div class='container flex justify-center mx-auto pt-16'>
          <div className='w-full'>
            <h1 class='xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto'>
              The Equity Incentive Team
            </h1>
          </div>
        </div>
        <div class='my-8'>
          <div class='md:grid md:grid-cols-2 md:mt-28 md:auto-rows-fr flex flex-col items-center'>
            {/* <TeamCard id={TEAM_LIST[0]?.fullName} member={TEAM_LIST[0]} image={himani} />
            <TeamCard id={TEAM_LIST[1]?.fullName} member={TEAM_LIST[4]} image={arman} />
            <TeamCard id={TEAM_LIST[2]?.fullName} member={TEAM_LIST[2]} image={jumana} />
            <TeamCard id={TEAM_LIST[3]?.fullName} member={TEAM_LIST[3]} image={lindsey} /> */}
            {TEAM_LIST.map((member, index) => (
              <TeamCard
                id={member?.fullName}
                member={member}
                image={images[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
