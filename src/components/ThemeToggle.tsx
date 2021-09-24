import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) return null;
        return (
          <>
            <div onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'dark' ? <SunIcon className="h-8" /> : <MoonIcon className="h-8" />}
            </div>
          </>
        );
      }}
    </ThemeToggler>
  );
}
