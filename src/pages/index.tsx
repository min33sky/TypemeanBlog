import { graphql, PageProps } from 'gatsby';
import { IGatsbyImageData, GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import ThemeToggle from '../components/ThemeToggle';

export type HomeProps = {
  blogs: {
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
};

const HomePage = ({
  data: {
    blogs: { edges },
  },
}: PageProps<HomeProps>) => {
  return (
    <Layout>
      <main className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2 lg:grid-cols-3">
          {edges.map((blog) => {
            return <PostCard key={blog.node.id} post={blog} />;
          })}
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    blogs: allContentfulBlogs {
      edges {
        node {
          id
          title
          slug
          date(formatString: "YYYY년 MMMM Do, a hh:mm", locale: "ko")
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

export default HomePage;
