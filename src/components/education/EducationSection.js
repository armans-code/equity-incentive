import React from 'react';

function EducationSection({ section }) {
  return (
    <div class='flex flex-col mb-28 gap-8 justify-center items-center'>
      <h2 className='text-xl font-semibold'>{section.title}</h2>
      <p className='text-lg leading-8'>{section.description}</p>
      {section.images.map((imageLink) => (
        <img className='w-7/12' src={imageLink} />
      ))}
      {section.links.map((link) => (
        <a
          href={link.link}
          target='_blank'
          rel='noopener noreferrer'
          className={`text-secondary underline`}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
}

export default EducationSection;
