// with help from Meraki (https://merakiui.com/components)
import React from 'react';

function ResourceCard({ title, description, link, author, date }) {
    return (
        <div class="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-8">
            <div class="flex items-center justify-between">
                <span class="text-sm font-light text-gray-600 dark:text-gray-400">
                    {date}
                </span>
            </div>

            <div class="mt-2">
                <a
                    href="#"
                    class="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
                    tabindex="0"
                    role="link"
                >
                    {title}
                </a>
                <p class="mt-2 text-gray-600 dark:text-gray-300">
                    {description}
                </p>
            </div>

            <div class="flex items-center justify-between mt-4">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link}
                    class="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    Read more
                </a>

                <div class="flex items-center">
                    <a
                        class="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                        tabindex="0"
                        role="link"
                    >
                        {author}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ResourceCard;
