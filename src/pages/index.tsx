import { graphql, PageProps } from 'gatsby';
import { IGatsbyImageData, GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';

export type HomeProps = {
  blogs: {
    edges: {
      node: {
        id: string;
        title: string;
        slug: string;
        coverImages: {
          id: string;
          gatsbyImageData: IGatsbyImageData;
        }[];
      };
    }[];
  };
};

const HomePage = ({
  data: {
    blogs: { edges },
  },
}: PageProps<HomeProps>) => {
  return (
    <Layout>
      <main className="container mx-auto">
        <div>
          {edges.map((blog) => {
            return <PostCard key={blog.node.id} post={blog} />;
          })}
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    blogs: allContentfulBlogs {
      edges {
        node {
          id
          title
          slug
          coverImages {
            id
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default HomePage;
