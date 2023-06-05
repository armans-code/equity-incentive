import React from 'react';
import { Link } from 'react-router-dom';
import handshake from '../../assets/images/handshake.svg';
import logo from '../../assets/images/equity_logo.png';

function Header() {
  return (
    <div className='px-12 sm:px-32'>
      <nav class='w-full'>
        {/* container */}
        <slot>
          <div class='flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative'>
            <input
              aria-hidden='true'
              type='checkbox'
              name='toggle_nav'
              id='toggle_nav'
              class='hidden peer'
            />
            <div class='relative z-20 w-full flex justify-between lg:w-max md:px-0'>
              <Link to='/' aria-label='logo' class='flex space-x-2 items-center'>
                <div class='flex'>
                  <img src={handshake} />
                </div>
                <div class='w-36'>
                  <img src={logo} />
                </div>
              </Link>

              <div class='relative flex items-center lg:hidden max-h-10'>
                <label
                  role='button'
                  for='toggle_nav'
                  aria-label='humburger'
                  id='hamburger'
                  class='relative  p-6 -mr-6'
                >
                  <div
                    aria-hidden='true'
                    id='line'
                    class='m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300'
                  ></div>
                  <div
                    aria-hidden='true'
                    id='line2'
                    class='m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300'
                  ></div>
                </label>
              </div>
            </div>
            <div
              aria-hidden='true'
              class='fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70'
            ></div>
            <div
              class='flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                            dark:shadow-none dark:bg-gray-800 dark:border-gray-700'
            >
              <div class='text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0'>
                <ul class='tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0'>
                  <li>
                    <Link to='/resources' class='block md:px-4 transition hover:text-primary'>
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link to='/education' class='block md:px-4 transition hover:text-primary'>
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link to='/team' class='block md:px-4 transition hover:text-primary'>
                      Meet the Team
                    </Link>
                  </li>
                </ul>
              </div>

              <div class='mt-12 lg:mt-0'>
                <Link
                  //   to='/contact'
                  class='relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
                >
                  <span class='relative text-sm font-semibold text-white'>Support</span>
                </Link>
              </div>
            </div>
          </div>
        </slot>
      </nav>
    </div>
  );
}

export default Header;
