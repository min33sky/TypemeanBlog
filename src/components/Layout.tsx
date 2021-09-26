import React from 'react';
import Header from './Header';

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 dark:text-gray-200 ">
      <Header />
      {/* <main className="">{children}</main> */}
      <div>{children}</div>
    </div>
  );
}

export default Layout;
