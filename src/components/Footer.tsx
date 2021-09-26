import React from 'react';

function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-12 mt-4 text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-200">
      <p className="text-sm">
        © {new Date().getFullYear()}{' '}
        <span className="text-indigo-500">
          <a href="https://github.com/min33sky" target="_blank">
            TypeMean Blog
          </a>
        </span>
        . Built With{' '}
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          className="text-indigo-500 hover:text-pink-400"
        >
          Gatsby
        </a>
      </p>
    </footer>
  );
}

export default Footer;
