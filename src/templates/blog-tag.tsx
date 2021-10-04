import { useStaticQuery, graphql, PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';

interface IBlogTag {
  blog: {
    edges: {
      node: {
        id: string;
        title: string;
        slug: string;
        date: string;
        tags: string[];
        coverImages: {
          id: string;
          gatsbyImageData: IGatsbyImageData;
        }[];
      };
    }[];
  };
}

function BlogTagTemplate({
  data: {
    blog: { edges },
  },
  path,
}: PageProps<IBlogTag>) {
  const tagName = path.split('/')[path.split('/').length - 1];

  return (
    <Layout>
      <article className="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
        <h1 className="mt-4 font-mono text-2xl font-bold first-letter:capitalize">
          {tagName} : <span className="font-sans font-medium">{edges.length}개</span>
        </h1>
        <div>
          {edges.map((edge) => (
            <PostCard key={edge.node.id} post={edge} />
          ))}
        </div>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query PostsByTagNameQuery($tag: String) {
    blog: allContentfulBlogs(filter: { tags: { eq: $tag } }) {
      edges {
        node {
          id
          title
          slug
          date
          tags
          coverImages {
            id
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogTagTemplate;
