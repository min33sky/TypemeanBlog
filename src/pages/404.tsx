import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <main className="h-[calc(100vh-8rem)] w-full flex items-center justify-center">
        <section className="flex flex-col items-center">
          <h1 className="text-9xl">404</h1>
          <h3 className="mt-2 text-xl">Page not found</h3>
          <Link to="/" className="mt-2">
            <p>Go To Main</p>
          </Link>
        </section>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
