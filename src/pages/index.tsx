import { graphql, PageProps } from 'gatsby';
import { getImage, IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import SEO from '../components/SEO';

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
      <SEO siteTitle="Home" />

      <main className="container mx-auto">
        {/* 히어로 이미지 */}
        <div className="relative">
          <StaticImage
            src="../assets/images/hero-image.webp"
            alt="hero-image"
            layout="constrained"
            className="w-full mt-6 rounded-lg h-36 sm:h-44 md:h-64 lg:h-80 grayscale"
          />
          <p className="absolute font-mono font-bold text-gray-200 md:text-lg lg:text-2xl right-5 top-10">
            TM's Development Blog
          </p>
        </div>

        {/* 노트 */}

        {/* 포스트 */}
        <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-4">
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
