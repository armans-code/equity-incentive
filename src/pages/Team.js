import React from 'react';
import { TEAM_LIST } from '../assets/TEAM_LIST';
import TeamCard from '../components/team/TeamCard';

function Team() {
    return (
        <div>
            <div class="w-full bg-gray-50 px-10">
                <div class="container flex justify-center mx-auto pt-16">
                    <div className="w-full">
                        <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                            The Equity Incentive Team
                        </h1>
                    </div>
                </div>
                <div class="my-8">
                    <div class="md:grid md:grid-cols-3 md:mt-8 flex flex-col items-center">
                        <div className="row-start-1 col-start-2 col-end-3">
                            <TeamCard
                                id={TEAM_LIST[0].fullName}
                                member={TEAM_LIST[0]}
                            />
                        </div>
                        <div className=" row-start-2">
                            <TeamCard
                                id={TEAM_LIST[1].fullName}
                                member={TEAM_LIST[1]}
                            />
                        </div>
                        <div className=" row-start-2">
                            <TeamCard
                                id={TEAM_LIST[2].fullName}
                                member={TEAM_LIST[2]}
                            />
                        </div>
                        <div className=" row-start-2">
                            <TeamCard
                                id={TEAM_LIST[3].fullName}
                                member={TEAM_LIST[3]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
