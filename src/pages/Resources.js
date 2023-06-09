import React, { useState } from 'react';
import { RESOURCE_LIST } from '../assets/RESOURCE_LIST';
import ResourceCard from '../components/resources/ResourceCard';

function Resources() {
  const [query, setQuery] = useState('');
  return (
    <div class='w-full pb-20 bg-gray-50 px-10 flex flex-col items-center'>
      <div class='container flex justify-center mx-auto pt-16'>
        <div className='w-full'>
          <h1 class='xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto'>
            Resources
          </h1>
        </div>
      </div>
      <p className='max-w-2xl mb-8 text-center'>
        The Equity Incentive works to not only raise money, but to raise
        awareness. These resources will allow you to become aware of the
        economic, racial, and gender disparities, facing our world and ways that
        you can help fix them. The first step to massive global change is being
        aware and educating others around you. We hope this page offers some
        knowledge that can help you become an active advocate for equity
        throughout the world.
      </p>
      <div class='flex justify-center'>
        <div class='xl:w-96'>
          <div class='relative flex w-full flex-wrap items-stretch'>
            <input
              type='search'
              placeholder='Search for resource...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              class='focus:border-primary relative m-0 block w-[1%] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200'
            />
          </div>
        </div>
      </div>
      <div className='mt-2'>
        {RESOURCE_LIST.map((resource) => {
          if (
            resource.title.toUpperCase().includes(query.toUpperCase()) ||
            resource.description.toUpperCase().includes(query.toUpperCase())
          )
            return (
              <ResourceCard
                title={resource.title}
                description={resource.description}
                link={resource.link}
                author={resource.author}
              />
            );
          else return null;
        })}
      </div>
    </div>
  );
}

export default Resources;
