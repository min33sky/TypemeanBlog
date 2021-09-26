import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) return null;
        return (
          <div
            className="cursor-pointer "
            onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'dark' ? (
              <SunIcon className="h-8 ease-in hover:text-yellow-500 hover:fill-current" />
            ) : (
              <MoonIcon className="h-8 ease-in hover:text-yellow-500 hover:fill-current" />
            )}
          </div>
        );
      }}
    </ThemeToggler>
  );
}
