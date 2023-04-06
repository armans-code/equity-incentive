import React from 'react';
import { EDUCATION_LIST } from '../assets/EDUCATION_LIST';

function Education() {
    return (
        <div class="w-full pb-20 bg-gray-50 px-10 flex flex-col items-center">
            <div class="container flex justify-center mx-auto pt-16">
                <div className="w-full">
                    <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                        Education
                    </h1>
                </div>
            </div>
            <div className="w-8/12 mt-8 font-serif">
                {EDUCATION_LIST.map((section) => (
                    <div class="flex flex-col mb-28 gap-8 justify-center items-center">
                        <h2 className="text-xl font-semibold">
                            {section.title}
                        </h2>
                        <p className="text-lg leading-8">
                            {section.description}
                        </p>
                        {section.images.map((imageLink) => (
                            <img className="w-7/12" src={imageLink} />
                        ))}
                        {section.links.map((link) => (
                            <a
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-secondary underline`}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
