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
      <h1 className="mt-4 text-5xl font-bold text-center">All Posts</h1>
      {edges.map((edge) => (
        <PostCard key={edge.node.id} post={edge} />
      ))}
    </Layout>
  );
}

export default Blogs;
