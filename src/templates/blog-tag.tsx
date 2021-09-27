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
}: PageProps<IBlogTag>) {
  console.log('edges: ', edges);

  return (
    <Layout>
      <article>
        <p>블로그 태그 템플릿</p>
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
