import React from 'react';
import { Link } from 'react-router-dom';
import Goals from '../components/home/Goals';

function Home() {
    return (
        <div className="flex flex-col items-center gap-10">
            <div class="relative" id="home">
                {/* gradient background */}
                <div
                    aria-hidden="true"
                    class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 "
                >
                    <div class="blur-[106px] h-56 bg-gradient-to-br from-blue-700 to-sky-300 dark:from-blue-700"></div>
                </div>
                <slot>
                    <div class="relative pt-28 ml-auto flex flex-col items-center">
                        <div class="lg:w-2/3 w-10/12 text-center mx-auto">
                            <h1 class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                                {/* Shaping a world with{' '} */}
                                The Equity Incentive:
                                <span class="text-primary dark:text-white">
                                    {/* Fighting for Equal Opportunities */}
                                </span>
                            </h1>
                            <p class="mt-8 text-gray-700 dark:text-gray-300">
                                The Equity Incentive strives to provide the
                                resources and knowledge to all people on
                                recognizing and battling inequity in all
                                environments. Join us in our fight for equal
                                opportunities for all.
                            </p>
                            <div class="mt-12 flex flex-wrap justify-center gap-y-4 gap-x-6">
                                <a
                                    href="#"
                                    class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                                >
                                    <Link
                                        to="/resources"
                                        class="relative text-base font-semibold text-white"
                                    >
                                        View Resources
                                    </Link>
                                </a>
                                <Link
                                    to="/team"
                                    class="sm:w-max relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 "
                                >
                                    <span class="relative text-base font-semibold text-primary dark:text-white">
                                        Learn more about us
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </slot>
            </div>
            <Goals />
        </div>
    );
}

export default Home;
