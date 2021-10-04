import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import NoteCard from '../components/NoteCard';
import SEO from '../components/SEO';
import FloatingNavButton from '../components/FloatingNavButton';

export interface INote {
  notes: {
    edges: {
      node: {
        id;
        title;
        slug;
        description;
        date;
        coverImage: {
          gatsbyImageData: IGatsbyImageData;
        };
        body: {
          raw;
        };
      };
      next: {
        title;
        slug;
      };
      previous: {
        title;
        slug;
      };
    }[];
  };
}

function Notes({
  data: {
    notes: { edges },
  },
}: PageProps<INote>) {
  return (
    <Layout>
      <SEO siteTitle="Note" />
      <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
        <h1 className="mt-4 text-5xl font-bold text-center">TM NOTE</h1>
        {edges.map((edge) => (
          <NoteCard
            key={edge.node.id}
            date={edge.node.date}
            description={edge.node.description}
            title={edge.node.title}
            slug={edge.node.slug}
            image={edge.node.coverImage.gatsbyImageData}
          />
        ))}
      </div>

      {/* 네비게이션 버튼 */}
      <FloatingNavButton />
    </Layout>
  );
}

export const query = graphql`
  query AllNotesQuery {
    notes: allContentfulNotes(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          description
          date(fromNow: true, locale: "ko")
          coverImage {
            gatsbyImageData(placeholder: BLURRED)
          }
          body {
            raw
          }
        }
        next {
          title
          slug
        }
        previous {
          title
          slug
        }
      }
    }
  }
`;
export default Notes;
