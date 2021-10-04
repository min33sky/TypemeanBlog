import { Link } from 'gatsby';
import React from 'react';

function CategoryBar({ categories }: { categories: string[] }) {
  return (
    <nav className="sticky z-50 flex pb-2 space-x-2 bg-gray-200 dark:bg-gray-800 top-[60px]">
      {categories.map((category) => (
        <Link key={category} to={category === 'All' ? `/blogs` : `/blogs/category/${category}`}>
          <p className="text-sm font-bold transition duration-200 ease-out md:text-base lg:text-lg hover:text-pink-400">
            {category}
          </p>
        </Link>
      ))}
    </nav>
  );
}

export default CategoryBar;
