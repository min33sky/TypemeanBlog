import React from 'react';
import Footer from './Footer';
import Header from './Header';
interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-800 dark:text-gray-200 ">
      <Header />
      <main className="container px-2 mx-auto md:px-8">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
