// with help from Meraki (https://merakiui.com/components)
import React from 'react';
import { Link } from 'react-router-dom';
import handshake from '../../assets/images/handshake.svg';
import logo from '../../assets/images/equity_logo.png';

function Footer() {
  return (
    <footer class='bg-white dark:bg-gray-900'>
      <div class='container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row'>
        <Link to='/' aria-label='logo' class='flex space-x-2 items-center'>
          <div class='flex'>
            <img src={handshake} />
          </div>
          <div class='w-36'>
            <img src={logo} />
          </div>
        </Link>

        <div class='flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0'>
          <Link
            to='/'
            class='text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400'
          >
            Home
          </Link>
          <Link
            to='/resources'
            class='text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400'
          >
            Resources
          </Link>
          <Link
            to='/education'
            class='text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400'
          >
            Education
          </Link>
          <Link
            to='/team'
            class='text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400'
          >
            Meet the Team
          </Link>
          <Link
            to='/support'
            class='text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400'
          >
            Support
          </Link>
        </div>
        <p>
          Made with ❤ by{' '}
          <a
            href='https://github.com/armans-code'
            target='_blank'
            rel='noopener noreferrer'
            className='underline text-primary'
          >
            Arman
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
