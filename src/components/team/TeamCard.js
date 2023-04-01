// with help from tailwindcomponents - Harrishash
import React from 'react';

function TeamCard({ member }) {
    return (
        <div role="listitem" class="relative w-11/12 my-16">
            <div class="rounded overflow-hidden shadow-md bg-white pb-14">
                <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                        <img
                            src={member.image}
                            alt="Display Picture of Andres Berlin"
                            role="img"
                            class="rounded-full object-cover h-full w-full shadow-md"
                        />
                    </div>
                </div>
                <div class="px-6 mt-16">
                    <h1 class="font-bold text-3xl text-center mb-1">
                        {member.fullName}
                    </h1>
                    <p class="text-gray-800 text-sm text-center">
                        {member.title}
                    </p>
                    <p class="text-center text-gray-600 text-base pt-3 font-normal">
                        {member.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
