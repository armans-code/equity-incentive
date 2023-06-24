import React, { useState } from 'react';
import { CHARITY_LIST } from '../assets/CHARITY_LIST';
import ResourceCard from '../components/resources/ResourceCard';

function Support() {
  const [query, setQuery] = useState('');
  return (
    <div class='w-full pb-20 bg-gray-50 px-10 flex flex-col items-center'>
      <div class='container flex justify-center mx-auto pt-16'>
        <div className='w-full'>
          <h1 class='xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto'>
            Charities
          </h1>
        </div>
      </div>
      <div class='flex justify-center'>
        <div class='xl:w-96'>
          <div class='relative flex w-full flex-wrap items-stretch'>
            <input
              type='search'
              placeholder='Search for charity...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              class='focus:border-primary relative m-0 block w-[1%] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200'
            />
          </div>
        </div>
      </div>
      <div className='mt-2'>
        {CHARITY_LIST.map((resource) => {
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

export default Support;
