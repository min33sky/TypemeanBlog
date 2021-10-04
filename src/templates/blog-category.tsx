import { graphql, PageProps, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import SEO from '../components/SEO';

interface ICatgoryProps {
  blogs: {
    edges: {
      node: {
        id: string;
        title: string;
        slug: string;
        description: string;
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

/**
 * 카테고리 템플릿
 * @returns
 */
function BlogCategoryTemplate({
  data: {
    blogs: { edges },
  },
  pageContext,
}: PageProps<ICatgoryProps>) {
  console.log('컨텍스트: ', pageContext);

  return (
    <Layout>
      <SEO siteTitle="Blogs: Category" />
      <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
        <h1 className="mt-4 mb-4 text-5xl font-bold text-center">Category</h1>
        {edges.map((edge) => (
          <PostCard key={edge.node.id} post={edge} />
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query CategoryQuery($category: String) {
    blogs: allContentfulBlogs(
      sort: { fields: date, order: DESC }
      filter: { category: { eq: $category } }
    ) {
      edges {
        node {
          id
          title
          slug
          description
          date(locale: "ko", fromNow: true)
          tags
          coverImages {
            id
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default BlogCategoryTemplate;
