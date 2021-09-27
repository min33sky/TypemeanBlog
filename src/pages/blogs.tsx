import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';

export interface IPosts {
  notes: {
    edges: {
      node: {
        id;
        title;
        description;
        slug;
        date;
        tags: string[];
        coverImages: {
          id;
          gatsbyImageData: IGatsbyImageData;
        }[];
        body: {
          raw;
        };
      };
    }[];
  };
}

/**
 * 포스트 목록 페이지
 * /blogs
 * @returns
 */
function Blogs() {
  const {
    notes: { edges },
  } = useStaticQuery<IPosts>(graphql`
    {
      notes: allContentfulBlogs(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            title
            description
            slug
            date(fromNow: true, locale: "ko")
            tags
            coverImages {
              id
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
        <h1 className="mt-4 text-5xl font-bold text-center">All Posts</h1>
        {edges.map((edge) => (
          <PostCard key={edge.node.id} post={edge} />
        ))}
      </div>
    </Layout>
  );
}

export default Blogs;
