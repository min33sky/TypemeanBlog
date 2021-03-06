import { MenuIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

/**
 * 블로그 메인 헤더
 * @returns
 */
function Header() {
  const [showMenu, setShowMenu] = useState(false); //* 햄버거 메뉴를 보여줄 지 유무

  return (
    <header className="sticky top-0 z-50 bg-gray-100 dark:bg-gray-900 md:px-0 ">
      <div className="container flex flex-col items-center px-2 py-4 mx-auto md:px-8 md:flex-row md:justify-between">
        {/* 헤더 */}
        <div className="container flex items-center justify-between ">
          <div className="flex items-center justify-between w-full">
            {/* 로고 */}
            <Link to="/" className="cursor-pointer ">
              <p className="font-mono text-lg font-bold tracking-wider select-none">
                &lt;TypeMean/&gt;
              </p>
            </Link>

            {/* 다크모드와 햄버거 메뉴 아이콘*/}
            <section className="flex items-center">
              <ThemeToggle />
              <MenuIcon
                onClick={() => setShowMenu((prev) => !prev)}
                className="h-8 ml-2 cursor-pointer md:hidden"
              />
            </section>
          </div>
        </div>

        {/* sm: 햄버거 메뉴 & md:오른쪽 네비게이션 */}
        <nav className="w-full md:w-auto">
          <div
            className={`flex select-none flex-col h-0 md:h-auto md:text-sm overflow-hidden transition-all duration-300 md:flex md:flex-row w-full divide-y-2 md:divide-y-0 md:justify-between md:px-4  ${
              showMenu ? 'h-60' : 'h-0'
            }`}
          >
            <div className="flex flex-col divide-y-2 md:flex-row md:space-x-4 md:divide-y-0">
              <Link className="text-2xl text-center cursor-pointer md:py-0 md:text-lg" to="/notes">
                <p className="py-4 transition ease-out md:py-0 hover:text-pink-400">Note</p>
              </Link>
              <Link className="text-2xl text-center cursor-pointer md:py-0 md:text-lg" to="/blogs">
                <p className="py-4 transition ease-out md:py-0 hover:text-pink-400">Posts</p>
              </Link>
              <Link className="text-2xl text-center cursor-pointer md:py-0 md:text-lg" to="/tags">
                <p className="py-4 transition ease-out md:py-0 hover:text-pink-400">Tags</p>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
