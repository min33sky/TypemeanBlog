import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { getImage, IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import NoteHomeCard from '../components/NoteHomeCard';
import PostCard from '../components/PostCard';
import SEO from '../components/SEO';
import FloatingNavButton from '../components/FloatingNavButton';

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
  notes: {
    edges: {
      node: {
        id: string;
        title: string;
        slug: string;
        description: string;
        date: string;
        coverImage: {
          id: string;
          gatsbyImageData: IGatsbyImageData;
        };
      };
    }[];
  };
};

/**
 * 메인 페이지
 * @param param0
 * @returns
 */
const HomePage = ({
  data: {
    blogs: { edges },
    notes: { edges: noteEdges },
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
        <div className="mt-6">
          <h1 className="text-2xl font-bold">TM Note</h1>
          {noteEdges.map((note) => {
            return (
              <NoteHomeCard
                key={note.node.id}
                title={note.node.title}
                slug={note.node.slug}
                description={note.node.description}
                date={note.node.date}
                image={note.node.coverImage.gatsbyImageData}
              />
            );
          })}
        </div>

        {/* 포스트 */}
        <h1 className="mt-6 text-2xl font-bold">TM POST</h1>
        <div className="grid grid-cols-1 gap-x-2 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-4">
          {edges.map((blog) => {
            return <PostCard key={blog.node.id} post={blog} />;
          })}
        </div>
      </main>

      {/* 네비게이션 버튼 */}
      <FloatingNavButton />
    </Layout>
  );
};

/**
 ** 홈페이지 쿼리
 */
export const query = graphql`
  query HomePageQuery {
    blogs: allContentfulBlogs(limit: 6, sort: { fields: date, order: DESC }) {
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
    notes: allContentfulNotes(limit: 1, sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          description
          date(formatString: "YYYY년 MMMM Do, a hh:mm", locale: "ko")
          coverImage {
            id
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default HomePage;
