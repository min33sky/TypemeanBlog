import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import PieChart from '../components/PieChart';
import SEO from '../components/SEO';
import chartData from '../utils/chartData';
import { getNumberByTag } from '../utils/getNumberByTag';

export interface ITags {
  tags: {
    edges: {
      node: {
        tags: string[];
      };
    }[];
  };
}

/**
 * 테그 페이지
 * @returns
 */
function Tags() {
  const {
    tags: { edges },
  } = useStaticQuery<ITags>(graphql`
    {
      tags: allContentfulBlogs {
        edges {
          node {
            tags
          }
        }
      }
    }
  `);

  const result = getNumberByTag(edges);

  return (
    <Layout>
      <SEO siteTitle="Tags" />
      <article>
        <div className="container h-64 mx-auto">
          <PieChart data={chartData()} />
        </div>
        <div className="container grid gap-4 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-3 ">
          {result.map(([tag, number], index) => (
            <Link
              key={index}
              to={`/tags/${tag}`}
              className="flex flex-col items-center justify-center px-4 py-2 text-gray-200 transition ease-out bg-gray-500 rounded-lg shadow-md dark:bg-gray-700 hover:text-pink-400 hover:-translate-y-1 "
            >
              <p className="pb-2 font-mono text-2xl font-bold truncate first-letter:uppercase">
                {tag}
              </p>
              <p>{number}</p>
            </Link>
          ))}
        </div>
      </article>
    </Layout>
  );
}

export default Tags;
