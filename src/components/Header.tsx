import React from 'react';

function Header() {
  return (
    <header className="bg-purple-400 py-4 sticky top-0 z-50 mb-4">
      <div className="mx-auto container flex items-center justify-between">
        <p>LOGO</p>
        <div>햄버거 버튼</div>
      </div>
    </header>
  );
}

export default Header;
